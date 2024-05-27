import { useCallback } from 'react';

import { MoviesGalleryStyle } from './movies-gallery.style';

import { MovieCard } from '@components/ui';
import { useMovies } from '@contexts';
import { MovieEntity, MoviesList } from '@domain';
import { useListMovies } from '@hooks';

type MoviesGalleryProps = {
  category: MoviesList;
};

export const MoviesGallery = ({ category }: MoviesGalleryProps) => {
  const {
    allPages = [],
    isPending,
    isLoading,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useListMovies(category);
  const { genreId } = useMovies();

  const filterMovies = useCallback(
    (list: Array<MovieEntity>): Array<MovieEntity> => {
      if (genreId) {
        return list.filter(({ genre_ids }) => genre_ids.includes(genreId));
      }

      return list;
    },
    [genreId],
  );

  return (
    <MoviesGalleryStyle
      isLoading={isPending || isLoading || isFetching || isFetchingNextPage}
      hasNextPage={hasNextPage}
      loadMore={fetchNextPage}
      data={filterMovies(allPages)}
      renderItem={(item: MovieEntity, key: number) => <MovieCard key={key} data={item} />}
      emptyMessage='No movies to show :('
    />
  );
};
