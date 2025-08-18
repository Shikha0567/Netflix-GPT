import React from "react";

const MainVideo = (videoId) => {
  return (
    <div className="w-screen pb-[56.25%] absolute inset-0 bg-gradient-to-l from-black">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/d9erkpdh5o0?si=${videoId}?rel=0&amp;autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MainVideo;
