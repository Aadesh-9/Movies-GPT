import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { NOW_PLAYING_MOVIES_API } from "../Utils/Constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
