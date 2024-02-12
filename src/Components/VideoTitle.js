import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[8%] bg-gradient-to-r from-black">
      <div className="px-12 text-white">
        <h1 className="text-6xl ml-5 font-bold">{title}</h1>
        <p className="w-1/4 p-6 text-lg">{overview}</p>
        <div className="">
          <button className="bg-gray-500 w-28 ml-5 p-3 px-6 text-black mr-1 text-lg rounded-md hover:bg-opacity-80">
            ▶play
          </button>
          <button className="bg-gray-500 w-28 text-black p-3 text-lg rounded-md hover:bg-opacity-80">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
