import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-40  pr-4">
      <img alt="MovieCard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
