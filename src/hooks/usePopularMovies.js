import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEYS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

export const usePopularMovies = () => {
  const dispathch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", API_KEYS)
      .then((res) => {
        dispathch(addPopularMovies(res?.data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default usePopularMovies;
