import { AuthPort, LoginPayload } from '@domain';

export enum AuthSessionKeys {
  USER = 'user',
  TOKEN = 'token',
}

export class AuthAPI implements AuthPort {
  private adapter: AuthPort;
  private _token: string | null = null;
  static instance: AuthAPI | null = null;

  constructor(adapter: AuthPort) {
    this.adapter = adapter;

    try {
      this._token = localStorage.getItem(AuthSessionKeys.TOKEN);
    } catch (error) {
      this._token = null;
    }

    this.adapter.token = this._token;

    if (typeof AuthAPI.instance === 'object') {
      return AuthAPI.instance;
    }

    AuthAPI.instance = this;
  }

  get token(): string | null {
    return this._token;
  }

  async login(payload: LoginPayload) {
    const data = await this.adapter.login(payload);
    this._token = data.token;

    return data;
  }

  validateSession() {
    return this.adapter.validateSession();
  }
}
