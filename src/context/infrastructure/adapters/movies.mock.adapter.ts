import {
  MoviesPort,
  ListOfMoviesResponse,
  ListOfMoviesInstance,
  MovieDetailsInstance,
  GetMovieDetailsResponse,
} from '@domain';

export class MoviesMockAdapter implements MoviesPort {
  static timeout: number = 1000;

  async listNowPlaying(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
      setTimeout(() => {
        resolve({
          dates: {
            minimum: '2024-04-17',
            maximum: '2024-05-29',
          },
          page: 1,
          results: ListOfMoviesInstance,
          total_pages: 1,
          total_results: ListOfMoviesInstance.length,
        });
      }, MoviesMockAdapter.timeout);
    });
  }

  async listPopular(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
      setTimeout(() => {
        resolve({
          dates: {
            minimum: '2024-04-17',
            maximum: '2024-05-29',
          },
          page: 1,
          results: ListOfMoviesInstance,
          total_pages: 1,
          total_results: ListOfMoviesInstance.length,
        });
      }, MoviesMockAdapter.timeout);
    });
  }

  async listTopRated(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
      setTimeout(() => {
        resolve({
          dates: {
            minimum: '2024-04-17',
            maximum: '2024-05-29',
          },
          page: 1,
          results: ListOfMoviesInstance,
          total_pages: 1,
          total_results: ListOfMoviesInstance.length,
        });
      }, MoviesMockAdapter.timeout);
    });
  }

  async listUpcoming(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
      setTimeout(() => {
        resolve({
          dates: {
            minimum: '2024-04-17',
            maximum: '2024-05-29',
          },
          page: 1,
          results: ListOfMoviesInstance,
          total_pages: 1,
          total_results: ListOfMoviesInstance.length,
        });
      }, MoviesMockAdapter.timeout);
    });
  }

  async getMovieDetails(): Promise<GetMovieDetailsResponse> {
    return new Promise<GetMovieDetailsResponse>(resolve => {
      setTimeout(() => {
        resolve(MovieDetailsInstance);
      }, MoviesMockAdapter.timeout);
    });
  }
}
