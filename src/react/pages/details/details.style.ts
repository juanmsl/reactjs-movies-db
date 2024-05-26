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

  .genre-tag {
    padding: 0.25em 1em;
    border-radius: 2em;
    background: ${props => props.theme.colors.primaryContrast}CC;
    color: ${props => props.theme.colors.primary};
    transition: all 300ms ease;
    border: 1px solid;
    user-select: none;

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
    }
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
