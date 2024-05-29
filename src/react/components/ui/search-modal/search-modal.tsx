import { InfinityScroll, Input, Modal, Typography, useDebounce } from '@juanmsl/ui';
import { useEffect, useMemo, useState } from 'react';

import { SearchModalStyle } from './search-modal.style';

import { MovieCard } from '@components/ui';
import { MovieEntity, SearchQueryResponse } from '@domain';
import { useSearchQuery } from '@hooks';

export const SearchModalContent = () => {
  const [searchParam, setSearchParam] = useState('');
  const debouncedSearchParam = useDebounce(searchParam, 500);
  const {
    allPages = [],
    data,
    isLoading,
    isFetching,
    isPending,
    hasNextPage,
    fetchNextPage,
  } = useSearchQuery({
    query: debouncedSearchParam,
  });

  const lastPage = useMemo<SearchQueryResponse | null>(() => {
    const length = (data?.pages ?? []).length;

    return length > 0 ? data.pages[length - 1] : null;
  }, [data?.pages]);

  return (
    <SearchModalStyle>
      <Typography variant='header4'>Search a movie</Typography>
      <Input
        leftIcon='magnifying-glass'
        name='search-param'
        value={searchParam}
        setValue={setSearchParam}
        placeholder='Search by movie title'
        variant='content-border'
      />
      <Typography className='search-message-result' variant='label'>
        Showing {allPages.length} result{allPages.length === 1 ? '' : 's'} of {lastPage?.total_results ?? 0}
      </Typography>
      <InfinityScroll
        isLoading={isLoading || isPending || isFetching}
        hasNextPage={hasNextPage}
        loadMore={fetchNextPage}
        data={allPages}
        className='search-results'
        renderItem={(item: MovieEntity, key: number) => <MovieCard key={key} data={item} noFavoriteAction />}
      />
    </SearchModalStyle>
  );
};

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <Modal onClick={onClose} isOpen={isOpen} opacity={0.5} zIndex={10} id='search-modal'>
      <SearchModalContent />
    </Modal>
  );
};
