import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { LoginPayload, UserEntity } from '@domain';
import { useLogin, useValidateSession } from '@hooks';
import { AuthSessionKeys } from '@infrastructure';

type AuthContextState = {
  user: UserEntity | null;
  isFetchingUser: boolean;
  login: (payload: LoginPayload) => void;
  loginError: string | null;
  validateSession: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextState | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthContextState['user']>();
  const { mutateAsync: loginAsync, isPending } = useLogin();
  const { mutateAsync: validateSessionAsync } = useValidateSession();

  useEffect(() => {
    try {
      const userString = localStorage.getItem(AuthSessionKeys.USER);
      const sessionUser = JSON.parse(userString);
      setUser(sessionUser);
    } catch (error) {
      setUser(null);
    }
  }, []);

  const updateUser = useCallback((user: UserEntity | null) => {
    setUser(user);

    if (user) {
      localStorage.setItem(AuthSessionKeys.USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(AuthSessionKeys.USER);
      localStorage.removeItem(AuthSessionKeys.TOKEN);
    }
  }, []);

  const login = useCallback(
    (payload: LoginPayload) => {
      loginAsync(payload).then(response => {
        updateUser(response);
      });
    },
    [loginAsync, updateUser],
  );

  const validateSession = useCallback(() => {
    validateSessionAsync(undefined)
      .then(data => {
        updateUser(data);
      })
      .catch(() => {
        updateUser(null);
      });
  }, [updateUser, validateSessionAsync]);

  const logout = useCallback(() => {
    updateUser(null);
  }, [updateUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isFetchingUser: isPending,
        login,
        validateSession,
        loginError: '',
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('useAuth must be used with in an AuthProvider');
  }

  return context;
};
