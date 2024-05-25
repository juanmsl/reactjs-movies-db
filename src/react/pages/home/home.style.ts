import styled from 'styled-components';

export const HomeStyle = styled.main`
  max-width: ${props => props.theme.constants.breakpoints.laptopL};
  width: 100%;
  margin: 0 auto;
  padding: 1em;

  .generators {
    display: grid;
    grid-template-columns: repeat(auto-fit, 280px);
    place-content: start center;
    gap: 40px;
    padding: 50px clamp(20px, 5.555%, 100px);
  }

  .home-header {
    text-align: center;
    padding: 50px clamp(20px, 5.555%, 100px);
  }

  .header-link {
    padding: 0.5em 1em 0.5em 0.5em;
    display: inline-block;
    transition: all 300ms ease;
    animation: pulse 1s ease infinite alternate;
    border-radius: 5px;
    color: ${props => props.theme.colors.primaryContrast};
    filter: drop-shadow(0 0 2px ${props => props.theme.colors.primary});
    text-shadow:
      1px 1px 1px ${props => props.theme.colors.primary},
      2px 2px 1px ${props => props.theme.colors.primary},
      3px 3px 1px ${props => props.theme.colors.primary};
  }

  .movies-categories-content {
    display: grid;
    gap: 2em;
    padding-bottom: 4em;
  }

  .movies-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3em;
  }

  .category-tabs {
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    gap: 4em;
    align-items: center;
    justify-content: start;
  }

  .category-tab {
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${props => props.theme.colors.primary};
      opacity: 0;
    }

    &:hover,
    &.is-open,
    &:focus {
      &::before {
        opacity: 1;
      }
    }

    &.is-open {
      color: ${props => props.theme.colors.primary};
      border-bottom: 1px solid;
    }
  }

  @keyframes pulse {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1.05);
    }
  }
`;
