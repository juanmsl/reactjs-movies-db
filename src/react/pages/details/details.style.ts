import styled from 'styled-components';

export const DetailsStyle = styled.main`
  max-width: ${props => props.theme.constants.breakpoints.laptopL};
  width: 100%;
  margin: 0 auto;

  .header-container {
    position: relative;
  }

  .poster-image-container {
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
      z-index: 1;
      background: linear-gradient(transparent 25%, ${props => props.theme.colors.background});
    }
  }

  .poster-header-container {
    display: grid;
    gap: 1em;
    padding: 0 1em 1em;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      padding: 4em 4em 0;
    }
  }

  .back-to-home {
    display: grid;
    gap: 1em;
    align-items: center;
    grid-auto-flow: column;
    cursor: pointer;
    padding: 0.25em 1em;
    border-radius: 4px;
    background: ${props => props.theme.colors.background}55;
    border: 1px solid transparent;

    &:hover {
      border-color: ${props => props.theme.colors.text};
    }
  }

  .poster-data-container {
    width: 75%;
    display: grid;
    gap: 1em;
    padding: 0 1em 1em;

    @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      padding: 0 4em 4em;
    }
  }

  .genre-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    place-content: start;
    align-items: center;
  }

  .poster-image {
    width: 100%;
    aspect-ratio: 25 / 14;
    object-fit: cover;
    display: block;
  }

  .movie-details {
    padding: 1em;

    @media screen and (min-width: ${props => props.theme.constants.breakpoints.tablet}) {
      padding: 4em;
    }
  }

  .movie-overview {
    max-width: 500px;
  }
`;
