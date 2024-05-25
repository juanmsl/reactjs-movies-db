import { AuthSessionKeys } from '../controllers';

import { UserInstance, AuthPort, LoginResponse, LoginPayload, ValidateSessionResponse } from '@domain';

export class AuthMockAdapter implements AuthPort {
  static timeout: number = 0;
  private _token: string | null = null;

  set token(value: string | null) {
    this._token = value;
  }

  login(payload: LoginPayload): Promise<LoginResponse> {
    return new Promise<LoginResponse>((resolve, reject) => {
      setTimeout(() => {
        const { username, password } = payload;

        if (username === UserInstance.username && password === 'qwerty') {
          this._token = UserInstance.token;
          localStorage.setItem(AuthSessionKeys.TOKEN, UserInstance.token);
          resolve(UserInstance);
        } else {
          reject();
        }
      }, AuthMockAdapter.timeout);
    });
  }

  validateSession(): Promise<ValidateSessionResponse> {
    return new Promise<ValidateSessionResponse>((resolve, reject) => {
      setTimeout(() => {
        if (this._token === UserInstance.token) {
          resolve(UserInstance);
        } else {
          reject();
        }
      }, AuthMockAdapter.timeout);
    });
  }
}
