import React from "react";
import MovieDescription from "./MovieDescription";

const VideoTitle = ({ title, overview, movieid }) => {
  return (
    <div className="w-screen h-[40%] md:h-auto aspect-video absolute pt-[8%] bg-gradient-to-r from-black md:bg-gradient-to-r md:from-black">
      <div className="mt-[93px] md:mt-0 px-3 md:px-12 text-white">
        <h1 className="w-1/2 h-[50px] md:w-1/4 text-xl md:text-6xl ml-2 md:mb-[2%] md:ml-5 font-semibold md:font-bold md:mt-0">
          {title}
        </h1>
        <p className="hidden md:inline-block md:w-1/4 p-6 text-lg">
          {overview}
        </p>
        <div className="">
          <button className="bg-gray-400 md:bg-gray-500 pd:w-28 ml-2 md:ml-5 md:p-3 px-2 md:px-6 text-black mr-1 text-lg rounded-md hover:bg-opacity-80 mt-2 md:mt-0">
            ▶play
          </button>
          <button className="hidden md:inline-block bg-gray-500 w-28 text-black p-3 text-lg rounded-md hover:bg-opacity-80">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
