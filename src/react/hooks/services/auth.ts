import { MutationFunction, useMutation, UseMutationResult } from '@tanstack/react-query';

import { LoginPayload, LoginResponse, ValidateSessionResponse } from '@domain';
import { AuthAPI, AuthMockAdapter } from '@infrastructure';

export const AuthKeys = {
  all: ['all'] as const,

  login: () => [...AuthKeys.all, 'login'] as const,
};

export const useLogin = (): UseMutationResult<LoginResponse, unknown, LoginPayload> => {
  const adapter = new AuthMockAdapter();
  const controller = new AuthAPI(adapter);

  const mutationFunction: MutationFunction<LoginResponse, LoginPayload> = async payload => controller.login(payload);

  return useMutation<LoginResponse, unknown, LoginPayload>({
    mutationFn: mutationFunction,
  });
};

export const useValidateSession = (): UseMutationResult<ValidateSessionResponse, unknown, undefined> => {
  const adapter = new AuthMockAdapter();
  const controller = new AuthAPI(adapter);

  const mutationFunction: MutationFunction<ValidateSessionResponse, undefined> = async () =>
    controller.validateSession();

  return useMutation<ValidateSessionResponse, unknown, undefined>({
    mutationFn: mutationFunction,
  });
};
