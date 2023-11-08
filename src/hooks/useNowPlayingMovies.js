import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEYS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const useNowPlayingMovies = () => {
  const dispathch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?page=1", API_KEYS)
      .then((res) => {
        dispathch(addNowPlayingMovies(res?.data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default useNowPlayingMovies;
