import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEYS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

export const useUpcomingMovies = () => {
  const dispathch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming", API_KEYS)
      .then((res) => {
        console.log(res);
        dispathch(addUpcomingMovies(res?.data?.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default useUpcomingMovies;
