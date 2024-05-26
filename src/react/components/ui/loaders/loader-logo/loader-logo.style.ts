import styled from 'styled-components';

export const LoaderLogoStyle = styled.section`
  height: 100%;
  min-height: 100dvh;
  display: grid;
  place-content: start center;
  justify-items: center;
  text-align: center;
  padding-top: 4em;

  .loader-icon {
    animation:
      rotate 750ms linear infinite,
      colors 1s linear infinite;
    font-size: 3em;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
