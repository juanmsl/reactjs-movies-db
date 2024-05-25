import { Button, Form, Input, InputPassword, Typography } from '@juanmsl/ui';

import { LoginStyle } from './login.style';

import { useAuth } from '@contexts';
import { LoginPayload } from '@domain';

export const Login = () => {
  const { login, isFetchingUser } = useAuth();

  return (
    <LoginStyle>
      <section className='login-form-container'>
        <Form<LoginPayload> className='login-form' onSubmit={login}>
          <Typography variant='header4'>Login</Typography>
          <Input.Controller
            name='username'
            label='Username'
            variant='line'
            placeholder='user-test'
            rules={{
              required: 'The username is required',
            }}
          />
          <InputPassword.Controller
            name='password'
            label='Password'
            variant='line'
            placeholder='qwerty'
            rules={{
              required: 'The password is required',
            }}
          />
          <Button isLoading={isFetchingUser}>Login</Button>
        </Form>
      </section>
    </LoginStyle>
  );
};
