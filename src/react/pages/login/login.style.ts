import styled from 'styled-components';

export const LoginStyle = styled.main`
  max-width: ${props => props.theme.constants.breakpoints.laptopL};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-content: center;

  .login-form-container {
    display: grid;
    padding: 4em 8em;
    gap: 2em;
    border-radius: 5px;
    background: ${props => props.theme.colors.text}11;
    backdrop-filter: blur(2px);
  }

  .login-form {
    display: grid;
    gap: 1em;
    width: 300px;
  }
`;
