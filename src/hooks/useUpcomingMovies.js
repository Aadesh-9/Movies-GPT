import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
