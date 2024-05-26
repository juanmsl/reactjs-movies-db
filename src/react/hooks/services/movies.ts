import {
  DefinedUseInfiniteQueryResult,
  InfiniteData,
  useInfiniteQuery,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { useMemo } from 'react';

import { GetMovieDetailsResponse, ListOfMoviesPayload, ListOfMoviesResponse, MovieDetailsEntity } from '@domain';
import { MoviesAPI, MoviesAdapter as MoviesAdapter } from '@infrastructure';

export const MoviesKeys = {
  all: ['all'] as const,

  listMoviesAll: () => [...MoviesKeys.all, 'listMovies'] as const,
  listNowPlaying: () => [...MoviesKeys.listMoviesAll(), 'listNowPlaying'] as const,
  listPopular: () => [...MoviesKeys.listMoviesAll(), 'listPopular'] as const,
  listTopRated: () => [...MoviesKeys.listMoviesAll(), 'listTopRated'] as const,
  listUpcoming: () => [...MoviesKeys.listMoviesAll(), 'listUpcoming'] as const,

  getMovieDetailsAll: () => [...MoviesKeys.all, 'getMovieDetails'] as const,
  getMovieDetails: (movieId: MovieDetailsEntity['id']) => [...MoviesKeys.getMovieDetailsAll(), movieId] as const,
};

type InfiniteQueryReturn<T, L> = DefinedUseInfiniteQueryResult<InfiniteData<T>, unknown> & {
  allPages: L;
};

const adapter = new MoviesAdapter();
const controller = new MoviesAPI(adapter);

const getNextPageParam = (lastPage: ListOfMoviesResponse) => {
  return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
};

export const useListNowPlaying = (
  payload?: ListOfMoviesPayload,
): InfiniteQueryReturn<ListOfMoviesResponse, ListOfMoviesResponse['results']> => {
  const data = useInfiniteQuery<ListOfMoviesResponse>({
    queryFn: async params =>
      controller.listNowPlaying({
        ...payload,
        page: params.pageParam as number,
      }),
    getNextPageParam,
    initialData: undefined,
    initialPageParam: 1,
    queryKey: MoviesKeys.listNowPlaying(),
  });

  const allPages: ListOfMoviesResponse['results'] = useMemo(
    () =>
      (data.data?.pages || []).reduce<ListOfMoviesResponse['results']>(
        (prev, page) => (page?.results ? [...prev, ...page.results] : prev),
        [] as ListOfMoviesResponse['results'],
      ),
    [data.data?.pages],
  );

  return {
    ...data,
    allPages,
  };
};

export const useListPopular = (
  payload?: ListOfMoviesPayload,
): InfiniteQueryReturn<ListOfMoviesResponse, ListOfMoviesResponse['results']> => {
  const data = useInfiniteQuery<ListOfMoviesResponse>({
    queryFn: async params =>
      controller.listPopular({
        ...payload,
        page: params.pageParam as number,
      }),
    getNextPageParam,
    initialData: undefined,
    initialPageParam: 1,
    queryKey: MoviesKeys.listPopular(),
  });

  const allPages: ListOfMoviesResponse['results'] = useMemo(
    () =>
      (data.data?.pages || []).reduce<ListOfMoviesResponse['results']>(
        (prev, page) => (page?.results ? [...prev, ...page.results] : prev),
        [] as ListOfMoviesResponse['results'],
      ),
    [data.data?.pages],
  );

  return {
    ...data,
    allPages,
  };
};

export const useListTopRated = (
  payload?: ListOfMoviesPayload,
): InfiniteQueryReturn<ListOfMoviesResponse, ListOfMoviesResponse['results']> => {
  const data = useInfiniteQuery<ListOfMoviesResponse>({
    queryFn: async params =>
      controller.listTopRated({
        ...payload,
        page: params.pageParam as number,
      }),
    getNextPageParam,
    initialData: undefined,
    initialPageParam: 1,
    queryKey: MoviesKeys.listTopRated(),
  });

  const allPages: ListOfMoviesResponse['results'] = useMemo(
    () =>
      (data.data?.pages || []).reduce<ListOfMoviesResponse['results']>(
        (prev, page) => (page?.results ? [...prev, ...page.results] : prev),
        [] as ListOfMoviesResponse['results'],
      ),
    [data.data?.pages],
  );

  return {
    ...data,
    allPages,
  };
};

export const useListUpcoming = (
  payload?: ListOfMoviesPayload,
): InfiniteQueryReturn<ListOfMoviesResponse, ListOfMoviesResponse['results']> => {
  const data = useInfiniteQuery<ListOfMoviesResponse>({
    queryFn: async params =>
      controller.listUpcoming({
        ...payload,
        page: params.pageParam as number,
      }),
    getNextPageParam,
    initialData: undefined,
    initialPageParam: 1,
    queryKey: MoviesKeys.listUpcoming(),
  });

  const allPages: ListOfMoviesResponse['results'] = useMemo(
    () =>
      (data.data?.pages || []).reduce<ListOfMoviesResponse['results']>(
        (prev, page) => (page?.results ? [...prev, ...page.results] : prev),
        [] as ListOfMoviesResponse['results'],
      ),
    [data.data?.pages],
  );

  return {
    ...data,
    allPages,
  };
};

export const useMovieDetails = (
  movieId: MovieDetailsEntity['id'],
  payload?: ListOfMoviesPayload,
): UseQueryResult<GetMovieDetailsResponse> => {
  return useQuery<GetMovieDetailsResponse>({
    queryFn: async () => controller.getMovieDetails(movieId, payload),
    queryKey: MoviesKeys.getMovieDetails(movieId),
  });
};
