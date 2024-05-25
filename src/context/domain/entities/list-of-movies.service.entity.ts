import { ApiResponseEntity, MovieEntity } from '@domain';

export type ListOfMoviesPayload = Partial<{
  page: number;
  sort_by: string;
  include_video: boolean;
  include_adult: boolean;
  language: string;
  'release_date.gte': string;
  'release_date.lte': string;
}>;

export type ListOfMoviesResponse = ApiResponseEntity<MovieEntity>;
