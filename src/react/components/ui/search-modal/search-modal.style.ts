import styled from 'styled-components';

export const SearchModalStyle = styled.section`
  display: grid;
  gap: 1em;
  padding: 2em;
  border-radius: 15px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  width: 1000px;
  max-width: 80vw;
  height: 800px;
  max-height: 80dvh;
  overflow: auto;
  align-content: start;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .search-results {
    height: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
  }

  .search-message-result {
    color: ${props => props.theme.colors.info};
    text-align: center;
  }
`;
