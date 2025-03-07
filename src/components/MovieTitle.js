import { IMG_CDN } from "../utils/constants";
import MovieList from "./MovieList";

const MovieTitle = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieList
              key={movie.id}
              movie={`${IMG_CDN}${movie.poster_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;
