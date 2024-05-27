import axios, { AxiosInstance } from 'axios';

import { ENV } from '@core/env';
import {
  GetMovieDetailsResponse,
  ListGenreResponse,
  ListOfMoviesPayload,
  ListOfMoviesResponse,
  MovieDetailsEntity,
  MoviesList,
  MoviesPort,
} from '@domain';

export class MoviesAdapter implements MoviesPort {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: ENV.API_URL,
      headers: {
        Authorization: `Bearer ${ENV.API_ACCESS_TOKEN}`,
        accept: 'application/json',
        'content-type': 'application/json',
      },
    });
  }

  async listMovies(category: MoviesList, payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse> {
    const { data } = await this.http.get<ListOfMoviesResponse>(`/movie/${category}`, {
      params: payload,
    });

    return data;
  }

  async getMovieDetails(movieId: MovieDetailsEntity['id']): Promise<GetMovieDetailsResponse> {
    const { data } = await this.http.get<GetMovieDetailsResponse>(`/movie/${movieId}`);

    return data;
  }

  async listGenres(): Promise<ListGenreResponse> {
    const { data } = await this.http.get<ListGenreResponse>('/genre/movie/list');

    return data;
  }
}
