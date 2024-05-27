import styled from 'styled-components';

export const MovieCardStyle = styled.section`
  width: 100%;
  background: ${props => props.theme.colors.background};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: all 300ms ease;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(
      -45deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.primary} 57%,
      ${props => props.theme.colors.background} 65%,
      ${props => props.theme.colors.background}
    );
    background-size: 200% 200%;
    background-position: 0 0;
    border-radius: 12px;
    top: -2px;
    left: -2px;
    z-index: -1;
    transition: all 300ms ease;
  }

  &:hover {
    //transform: scale(1.1);
    &::before {
      background-position: 100% 100%;
    }
  }

  .backdrop-image-container {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 300ms ease;
      border-radius: 9px 9px 0 0;
      background: linear-gradient(transparent 75%, ${props => props.theme.colors.background});
    }
  }

  .backdrop-image {
    width: 100%;
    aspect-ratio: 25 / 14;
    object-fit: cover;
    display: block;
    border-radius: 9px 9px 0 0;
  }

  .movie-card-content {
    padding: 1em;
    display: grid;
    gap: 4px;
  }

  .movie-card-footer {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    gap: 1em;
    align-items: center;
  }

  .movie-card-actions {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
  }

  .favorite-action {
    width: 1.5em;
    height: 1.5em;
    display: grid;
    place-content: center;
    border-radius: 2em;
    padding: 0.1em;
    background: ${props => props.theme.colors.primaryContrast};
    color: ${props => props.theme.colors.primary};
  }
`;
