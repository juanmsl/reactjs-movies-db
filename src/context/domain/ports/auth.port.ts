import { LoginPayload, LoginResponse, ValidateSessionResponse } from '@domain';

export interface AuthPort {
  token: string | null;
  login(payload: LoginPayload): Promise<LoginResponse>;
  validateSession(): Promise<ValidateSessionResponse>;
}
