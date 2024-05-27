import {
  GetMovieDetailsResponse,
  ListGenreResponse,
  ListOfMoviesPayload,
  ListOfMoviesResponse,
  MovieDetailsEntity,
  MoviesList,
} from '@domain';

export interface MoviesPort {
  listMovies(category: MoviesList, payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  getMovieDetails(movieId: MovieDetailsEntity['id']): Promise<GetMovieDetailsResponse>;
  listGenres(): Promise<ListGenreResponse>;
}
