import { useQuery } from "react-query";
import axios from "axios";

import MovieCard from "~/components/MovieCard";
import type { Movie, SearchResultProps } from "types/types";

const MoviesList: React.FC<SearchResultProps> = ({ title, keyword }) => {
  const fetchMovies = async (): Promise<Movie[]> => {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        String(keyword)
      )}`
    );
    return response.data.results;
  };

  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery<Movie[], Error>("movies", fetchMovies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-semibold">{title}</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {movies
          ? movies.map((movie, index) => (
              <MovieCard
                key={index}
                id={movie.id}
                title={movie.title}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default MoviesList;
