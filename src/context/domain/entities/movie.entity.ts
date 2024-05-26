import { GenreEntity, MovieDetailsEntity } from './movie-details.entity';

export type MovieEntity = Pick<
  MovieDetailsEntity,
  | 'adult'
  | 'backdrop_path'
  | 'id'
  | 'original_language'
  | 'original_title'
  | 'overview'
  | 'popularity'
  | 'poster_path'
  | 'release_date'
  | 'title'
  | 'video'
  | 'vote_average'
  | 'vote_count'
> & {
  genre_ids: Array<GenreEntity['id']>;
};
