import React from "react";

const VideoLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center flex-col">
        <img src="/Loader.gif" alt="Loading..." />
    </div>
  );
};

export default VideoLoader;
