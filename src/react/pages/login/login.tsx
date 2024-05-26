import { Button, Form, Icon, Image, Input, InputPassword, Typography } from '@juanmsl/ui';

import { LoginStyle } from './login.style';

import { useAuth } from '@contexts';
import { LoginPayload } from '@domain';

export const Login = () => {
  const { login, isFetchingUser } = useAuth();

  return (
    <LoginStyle>
      <section className='login-form-container'>
        <Form<LoginPayload> className='login-form' onSubmit={login}>
          <section className='login-logo-container'>
            <Image src='/assets/images/logo.png' className='login-logo' />
          </section>
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
          <Typography variant='small' className='login-message'>
            <Icon name='info' className='login-message-icon' />
            <span>
              Please use <code>user-test</code> as <u>username</u> and <code>qwerty</code> as <u>password</u>!
            </span>
          </Typography>
          <Button className='submit-button' type='submit' isLoading={isFetchingUser}>
            Login
          </Button>
        </Form>
      </section>
    </LoginStyle>
  );
};
