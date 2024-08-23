import React from "react";

const VideoLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
      <video
        src="https://amvifurniture.com/Loader.mp4"
        autoPlay
        muted
        loop
        className="w-72 h-72 object-cover sm:w-96 sm:h-96"
      ></video>
    </div>
  );
};

export default VideoLoader;
