import { ApiResponseEntity, MovieEntity } from '@domain';

export type SearchQueryPayload = {
  query: string;
  include_adult?: boolean;
  language?: string;
  primary_release_year?: string;
  page?: number;
  region?: string;
  year?: string;
};

export type SearchQueryResponse = ApiResponseEntity<MovieEntity>;
