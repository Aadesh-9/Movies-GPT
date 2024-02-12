import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
