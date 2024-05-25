import { ListOfMoviesPayload, MoviesPort } from '@domain';

export class MoviesAPI implements MoviesPort {
  private adapter: MoviesPort;

  constructor(adapter: MoviesPort) {
    this.adapter = adapter;
  }

  listNowPlaying(payload: ListOfMoviesPayload) {
    return this.adapter.listNowPlaying(payload);
  }

  listPopular(payload: ListOfMoviesPayload) {
    return this.adapter.listPopular(payload);
  }

  listTopRated(payload: ListOfMoviesPayload) {
    return this.adapter.listTopRated(payload);
  }

  listUpcoming(payload: ListOfMoviesPayload) {
    return this.adapter.listUpcoming(payload);
  }
}
