import {
  ListOfMoviesPayload,
  ListOfMoviesResponse,
  MovieDetailsEntity,
  MovieEntity,
  MoviesList,
  MoviesPort,
} from '@domain';

const mapFieldImagesToFullImageURL = <T extends MovieEntity | MovieDetailsEntity>(
  movie: T,
  size: string = 'w500',
): T => ({
  ...movie,
  backdrop_path: `https://image.tmdb.org/t/p/${size}${movie.backdrop_path}`,
  poster_path: `https://image.tmdb.org/t/p/${size}${movie.backdrop_path}`,
});

const transformListResponse = async (promise: Promise<ListOfMoviesResponse>): Promise<ListOfMoviesResponse> => {
  const data = await promise;

  return {
    ...data,
    results: data.results.map(movie => mapFieldImagesToFullImageURL(movie)),
  };
};

export class MoviesAPI implements MoviesPort {
  private adapter: MoviesPort;

  constructor(adapter: MoviesPort) {
    this.adapter = adapter;
  }

  listMovies(category: MoviesList, payload: ListOfMoviesPayload) {
    return transformListResponse(this.adapter.listMovies(category, payload));
  }

  async getMovieDetails(movieId: MovieDetailsEntity['id']) {
    const data = await this.adapter.getMovieDetails(movieId);

    return mapFieldImagesToFullImageURL(data, 'original');
  }

  listGenres() {
    return this.adapter.listGenres();
  }
}
