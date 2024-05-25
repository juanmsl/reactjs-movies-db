import { UserEntity } from './user.entity';

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = UserEntity & {};
