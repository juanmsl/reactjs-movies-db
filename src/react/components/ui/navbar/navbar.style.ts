import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.primaryContrast};
  padding: 10px 10px;
  display: grid;
  justify-items: center;
  gap: 50px;
  align-content: space-between;

  .navbar-logo {
    width: 2em;
    height: 2em;
    background: ${props => props.theme.colors.primaryContrast};
    border-radius: 50%;
    padding: 0.2em;
    cursor: pointer;
  }

  .navbar-top,
  .section-bottom {
    display: grid;
    justify-items: center;
    gap: 50px;
  }

  .navbar-logo-container {
    text-decoration: none;
    color: inherit;
    display: grid;
    justify-items: center;
    gap: 10px;

    .navbar-title {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
    }
  }

  .navbar-options {
    display: grid;
    gap: 20px;
    justify-items: center;

    &--link {
      width: 2em;
      height: 2em;
      display: grid;
      place-content: center;
      border-radius: 50%;

      &:hover:not(.active) {
        background: ${props => props.theme.colors.primaryContrast}33;
      }

      &.active {
        background: ${props => props.theme.colors.primaryContrast};
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .modal-logout {
    width: 2em;
    height: 2em;
    display: grid;
    place-content: center;
    border-radius: 50%;
    border: 1px solid;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.primaryContrast};
      color: ${props => props.theme.colors.primary};
    }
  }
`;
