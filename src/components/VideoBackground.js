import { useSelector } from "react-redux";
import { useMovieTitle } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movie?.trailerVideo);
  useMovieTitle(movieId);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
      ></iframe>
    </div>
  );
};

export default VideoBackground;
