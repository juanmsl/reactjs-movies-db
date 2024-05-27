import { InfinityScroll } from '@juanmsl/ui';
import styled from 'styled-components';

export const MoviesGalleryStyle = styled(InfinityScroll)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3em;
`;
