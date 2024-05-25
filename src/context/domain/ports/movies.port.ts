import { ListOfMoviesPayload, ListOfMoviesResponse } from '@domain';

export interface MoviesPort {
  listNowPlaying(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  listPopular(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  listTopRated(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
  listUpcoming(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse>;
}
