export type GenreEntity = {
  id: number;
  name: string;
};

export type CountryEntity = {
  iso_3166_1: string;
  name: string;
};

export type CompanyEntity = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type LanguageEntity = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type CollectionEntity = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type MovieDetailsEntity = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: CollectionEntity | null;
  budget: number;
  genres: Array<GenreEntity>;
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<CompanyEntity>;
  production_countries: Array<CountryEntity>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<LanguageEntity>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
