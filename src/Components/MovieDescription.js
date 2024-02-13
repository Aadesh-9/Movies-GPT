import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NETFLIX_LOGO_URl } from "../Utils/Constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieDescription = () => {
  const { movieId } = useParams();
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  const movies = useSelector((store) => store?.movies);
  const currentPlayingMovie = movies?.nowPlayingMovies;
  const topRatedMovie = movies?.topRatedMovies;
  const upcomingMovie = movies?.upcomingMovies;
  const popularMovie = movies?.popularMovies;

  let selectedMovie = null;

  if (currentPlayingMovie) {
    selectedMovie = currentPlayingMovie.find(
      (movie) => movie.id === parseInt(movieId, 10)
    );
    console.log(selectedMovie);
  }
  if (!selectedMovie && topRatedMovie)
    selectedMovie = topRatedMovie.find(
      (movie) => movie.id === parseInt(movieId, 10)
    );
  if (!selectedMovie && upcomingMovie)
    selectedMovie = upcomingMovie.find(
      (movie) => movie.id === parseInt(movieId, 10)
    );
  if (!selectedMovie && popularMovie)
    selectedMovie = popularMovie.find(
      (movie) => movie.id === parseInt(movieId, 10)
    );

  if (!selectedMovie) return null;

  const { title, overview, release_date, poster_path, vote_average } =
    selectedMovie;

  return (
    <div className="w-full aspect-video absolute  bg-gradient-to-b from-black">
      <div className="flex justify-end">
        <div className="absolute   ">
          <img
            className="p2 w-[220px]"
            alt="movie poster"
            src={IMG_CDN_URL + poster_path}
          ></img>
        </div>
      </div>

      <div className="bg-gradient-to-r from-black text-white absolute w-[50%] h-full">
        <div className="ml-14 w-[50%]">
          <h1 className="text-4xl font-extrabold mt-24 p-5 shadow-sm">
            {title}
          </h1>
          <h1 className="p-2 text-xl font-semibold">{overview}</h1>
          <h1 className="p-2 text-lg font-medium">⭐ {vote_average}</h1>
          <h1 className="p-2 text-lg font-medium">
            Release-date ➡️ {release_date}
          </h1>
          <button className="bg-red-600 p-4 m-4 mt-3 ml-6 ml2 font-bold text-xl rounded-lg">
            Watch Now
          </button>
        </div>
      </div>
      <div>
        <img
          className="absolute ml-10 w-44 mx-auto md:mx-0"
          alt="netflix-logo"
          src={NETFLIX_LOGO_URl}
        ></img>
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?&autoplay=1&showinfo=0&controls=0&loop=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDescription;
