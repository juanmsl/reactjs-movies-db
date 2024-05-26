import styled from 'styled-components';

export const LoginStyle = styled.main`
  max-width: ${props => props.theme.constants.breakpoints.laptopL};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-content: center;
  justify-items: center;
  grid-template-columns: 1fr;
  padding: 1em;

  .login-form-container {
    display: grid;
    gap: 2em;
    border-radius: 5px;
    background: ${props => props.theme.colors.text}11;
    backdrop-filter: blur(2px);
    padding: 4em;
    transition: all 300ms ease;
    width: 100%;
    max-width: 420px;

    @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      max-width: 550px;
      padding: 4em 8em;
    }
  }

  .login-form {
    display: grid;
    gap: 1em;
    width: 100%;
  }

  .login-logo-container {
    width: 200px;
    height: 200px;
    border: 5px solid;
    border-radius: 50%;
    transition: all 300ms ease;
    justify-self: center;

    &:hover {
      border: 10px solid;
    }
  }

  .login-logo {
    display: block;
    width: 100%;
  }

  .login-message {
    background: ${props => props.theme.colors.text}11;
    color: ${props => props.theme.colors.info};
    padding: 0.5em 1em;
    display: grid;
    grid-auto-flow: column;
    gap: 1em;
    border-radius: 5px;

    code {
      font-weight: bold;
    }
  }

  .login-message-icon {
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    border: 1px solid;
    display: grid;
    place-content: center;
    padding: 0.2em;
  }

  .submit-button {
    justify-self: center;
    width: 150px;
  }
`;
