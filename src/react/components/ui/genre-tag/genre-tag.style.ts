import styled from 'styled-components';

export const GenreTagStyle = styled.span`
  .genre-tag {
    padding: 0.25em 1em;
    border-radius: 2em;
    background: ${props => props.theme.colors.primaryContrast}CC;
    color: ${props => props.theme.colors.primary};
    transition: all 300ms ease;
    border: 1px solid;
    user-select: none;

    &.tag-selected,
    &:hover {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primaryContrast};
    }
  }
`;
