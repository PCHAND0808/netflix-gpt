import { IMG_CDN } from "../utils/constants";
import MovieList from "./MovieList";

const MovieTitle = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-md font-bold px-2 py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
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
