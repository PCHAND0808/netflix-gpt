import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEYS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

export const useTopRatedMovies = () => {
  const dispathch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", API_KEYS)
      .then((res) => {
        dispathch(addTopRatedMovies(res?.data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default useTopRatedMovies;
