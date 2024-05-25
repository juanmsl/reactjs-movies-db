import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@contexts';

type WithAuthParams = {
  Component: React.FC;
  shouldBeAuthenticated: boolean;
  redirectTo: string;
};

export const withAuth = ({ Component, shouldBeAuthenticated, redirectTo }: WithAuthParams) => {
  const AuthValidationWrapper = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if ((user && !shouldBeAuthenticated) || (!user && shouldBeAuthenticated)) {
        navigate(redirectTo);
      }
    }, [navigate, user]);

    return <Component />;
  };

  return AuthValidationWrapper;
};
