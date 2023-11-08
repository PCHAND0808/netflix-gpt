import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const moviesSelector = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!moviesSelector) return;

  const movieTitleDetails = moviesSelector?.[0];
  console.log(movieTitleDetails);
  const { original_title, overview, id } = movieTitleDetails;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
