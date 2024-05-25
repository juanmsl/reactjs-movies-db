import { MoviesPort, ListOfMoviesResponse, ListOfMoviesInstance } from '@domain';

export class MoviesMockAdapter implements MoviesPort {
  async listNowPlaying(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
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
    });
  }

  async listPopular(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
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
    });
  }

  async listTopRated(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
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
    });
  }

  async listUpcoming(): Promise<ListOfMoviesResponse> {
    return new Promise<ListOfMoviesResponse>(resolve => {
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
    });
  }
}
