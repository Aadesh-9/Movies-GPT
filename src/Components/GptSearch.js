import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugessions from "./GptMovieSugessions";
import { NETFLIX_BG_IMAGE } from "../Utils/Constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={NETFLIX_BG_IMAGE} alt="Bg-pic-netflix"></img>
      </div>
      <GptSearchBar />
      <GptMovieSugessions />
    </div>
  );
};

export default GptSearch;
