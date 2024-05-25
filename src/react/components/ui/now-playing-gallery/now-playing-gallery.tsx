import { InfinityScroll } from '@juanmsl/ui';

import { MovieCard } from '@components/ui';
import { MovieEntity } from '@domain';
import { useListNowPlaying } from '@hooks';

export const NowPlayingGallery = () => {
  const { allPages = [], isPending, isLoading, hasNextPage, fetchNextPage } = useListNowPlaying();

  return (
    <InfinityScroll
      isLoading={isPending || isLoading}
      hasNextPage={hasNextPage}
      loadMore={fetchNextPage}
      data={allPages}
      renderItem={(item: MovieEntity, key: number) => <MovieCard key={key} data={item} />}
    />
  );
};
