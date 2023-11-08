import axios from "axios";
import { useEffect } from "react";
import { API_KEYS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

export const useMovieTitle = (movieId) => {
  const dispathch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_KEYS)
      .then((res) => {
        const trailer = res?.data?.results?.filter(
          (video) => video.type == "Trailer"
        );
        const originalTrailer =
          trailer.length > 0 ? trailer[0] : res.data.results[0];
        dispathch(addTrailerVideo(originalTrailer));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};
