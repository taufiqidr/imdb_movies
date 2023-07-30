export interface Movie {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

export interface CastProps {
  name: string;
  character: string;
  profile_path: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  runtime: number;
  vote_average: number;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
  poster_path: string;
}

export interface Credits {
  id: number;
}

export interface MovieCardProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

export interface MovieListProps {
  title: string;
  endpoint: string;
}

export interface SearchResultProps {
  title: string;
  keyword: string | string[] | undefined;
}

export interface TvCardProps {
  id: number;
  name: string;
  first_air_date: string;
  poster_path: string;
}

export interface TVDetails {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  genres: {
    id: number;
    name: string;
  }[];
  first_air_date: string;
  poster_path: string;
}

export interface Tv {
  id: number;
  name: string;
  first_air_date: string;
  poster_path: string;
}

export interface TvListProps {
  title: string;
  endpoint: string;
}
