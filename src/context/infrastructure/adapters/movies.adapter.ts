import axios, { AxiosInstance } from 'axios';

import { ENV } from '@core/env';
import { ListOfMoviesPayload, ListOfMoviesResponse, MoviesPort } from '@domain';

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

  async listNowPlaying(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse> {
    const { data } = await this.http.get<ListOfMoviesResponse>('/movie/now_playing', {
      params: payload,
    });

    return data;
  }

  async listPopular(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse> {
    const { data } = await this.http.get<ListOfMoviesResponse>('/movie/popular', {
      params: payload,
    });

    return data;
  }

  async listTopRated(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse> {
    const { data } = await this.http.get<ListOfMoviesResponse>('/movie/top_rated', {
      params: payload,
    });

    return data;
  }

  async listUpcoming(payload: ListOfMoviesPayload): Promise<ListOfMoviesResponse> {
    const { data } = await this.http.get<ListOfMoviesResponse>('/movie/upcoming', {
      params: payload,
    });

    return data;
  }
}
