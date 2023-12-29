import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";

const SecondaryContainer = () => {
  const moviesSelector = useSelector((store) => store.movie?.nowPlayingMovies);
  const popularMovieSelector = useSelector(
    (store) => store.movie?.popularMovies
  );
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movie?.upComingMovies);

  return (
    <div className="bg-black">
      {moviesSelector && (
        <div className=" -mt-52 relative text-white z-20">
          <MovieTitle title={"Now Playing"} movies={moviesSelector} />
          <MovieTitle title={"Popular"} movies={popularMovieSelector} />
          <MovieTitle title={"Top Rated"} movies={topRatedMovies} />
          <MovieTitle title={"UpComing"} movies={upComingMovies} />
          {/*<MovieTitle title={"Now Playing"} movies={moviesSelector} />
          <MovieTitle title={"Now Playing"} movies={moviesSelector} />*/}
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
