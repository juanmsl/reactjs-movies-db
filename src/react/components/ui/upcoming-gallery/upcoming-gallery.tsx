import { InfinityScroll } from '@juanmsl/ui';
import { useCallback } from 'react';

import { MovieCard } from '@components/ui';
import { MovieEntity } from '@domain';
import { useListUpcoming } from '@hooks';

export const UpcomingGallery = () => {
  const { allPages = [], isPending, isLoading, hasNextPage, fetchNextPage } = useListUpcoming();

  const renderItem = useCallback((item: MovieEntity, key: number) => <MovieCard key={key} data={item} />, []);

  return (
    <InfinityScroll
      isLoading={isPending || isLoading}
      hasNextPage={hasNextPage}
      loadMore={fetchNextPage}
      data={allPages}
      renderItem={renderItem}
    />
  );
};
