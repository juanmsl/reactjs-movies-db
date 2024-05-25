import styled from 'styled-components';

export const AuthenticatedLayoutStyle = styled.section`
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-rows: 1fr auto;

  .main-layout-content {
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
    overflow: auto;
  }

  .main-layout-outlet {
    height: 100%;
    overflow: auto;
  }
`;
