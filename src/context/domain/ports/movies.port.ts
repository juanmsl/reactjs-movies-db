import {
  GetMovieDetailsPayload,
  GetMovieDetailsResponse,
  ListOfMoviesPayload,
  ListOfMoviesResponse,
  MovieDetailsEntity,
} from '@domain';

export interface MoviesPort {
  listNowPlaying(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  listPopular(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  listTopRated(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  listUpcoming(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  getMovieDetails(movieId: MovieDetailsEntity['id'], payload: GetMovieDetailsPayload): Promise<GetMovieDetailsResponse>;
}
