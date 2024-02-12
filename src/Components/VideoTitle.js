import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[8%] bg-gradient-to-r from-black">
      <div className="mt-12 md:mt-0 px-3 md:px-12 text-white">
        <h1 className="text-xl md:text-6xl ml-2 md:ml-5 font-semibold md:font-bold md:mt-0">
          {title}
        </h1>
        <p className="hidden md:inline-block w-1/4 p-6 text-lg">{overview}</p>
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
