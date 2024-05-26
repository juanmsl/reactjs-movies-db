import {
  GetMovieDetailsPayload,
  ListOfMoviesPayload,
  ListOfMoviesResponse,
  MovieDetailsEntity,
  MovieEntity,
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

  listNowPlaying(payload: ListOfMoviesPayload) {
    return transformListResponse(this.adapter.listNowPlaying(payload));
  }

  listPopular(payload: ListOfMoviesPayload) {
    return transformListResponse(this.adapter.listPopular(payload));
  }

  listTopRated(payload: ListOfMoviesPayload) {
    return transformListResponse(this.adapter.listTopRated(payload));
  }

  listUpcoming(payload: ListOfMoviesPayload) {
    return transformListResponse(this.adapter.listUpcoming(payload));
  }

  async getMovieDetails(movieId: MovieDetailsEntity['id'], payload: GetMovieDetailsPayload) {
    const data = await this.adapter.getMovieDetails(movieId, payload);

    return mapFieldImagesToFullImageURL(data, 'original');
  }
}
