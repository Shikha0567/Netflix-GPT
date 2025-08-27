import React from "react";

const MainVideo = ({ videoId }) => {
  return (
    <iframe
      className="absolute inset-0 w-full h-full"
      src={`https://www.youtube.com/embed/d9erkpdh5o0?si=${videoId}?rel=0&amp;autoplay=1&mute=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default MainVideo;
