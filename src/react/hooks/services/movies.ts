import {
  DefinedUseInfiniteQueryResult,
  InfiniteData,
  useInfiniteQuery,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import { useMemo } from 'react';

import {
  GetMovieDetailsResponse,
  ListGenreResponse,
  ListOfMoviesPayload,
  ListOfMoviesResponse,
  MovieDetailsEntity,
  MoviesList,
} from '@domain';
import { MoviesAPI, MoviesAdapter as MoviesAdapter } from '@infrastructure';

export const MoviesKeys = {
  all: ['all'] as const,

  listAll: () => [...MoviesKeys.all, 'list'] as const,
  listAllMovies: () => [...MoviesKeys.listAll(), 'movies'] as const,
  listMovies: (category: MoviesList) => [...MoviesKeys.listAllMovies(), category] as const,
  listAllGenres: () => [...MoviesKeys.listAll(), 'genres'] as const,

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

export const useListMovies = (
  category: MoviesList,
  payload?: ListOfMoviesPayload,
): InfiniteQueryReturn<ListOfMoviesResponse, ListOfMoviesResponse['results']> => {
  const data = useInfiniteQuery<ListOfMoviesResponse>({
    queryFn: async params =>
      controller.listMovies(category, {
        ...payload,
        page: params.pageParam as number,
      }),
    getNextPageParam,
    initialData: undefined,
    initialPageParam: 1,
    queryKey: MoviesKeys.listMovies(category),
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

export const useMovieDetails = (movieId: MovieDetailsEntity['id']): UseQueryResult<GetMovieDetailsResponse> => {
  return useQuery<GetMovieDetailsResponse>({
    queryFn: async () => controller.getMovieDetails(movieId),
    queryKey: MoviesKeys.getMovieDetails(movieId),
  });
};

export const useListGenres = (): UseQueryResult<ListGenreResponse> => {
  return useQuery<ListGenreResponse>({
    queryFn: async () => controller.listGenres(),
    queryKey: MoviesKeys.listAllGenres(),
  });
};
