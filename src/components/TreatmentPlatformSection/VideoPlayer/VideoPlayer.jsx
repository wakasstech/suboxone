import React, { useState } from 'react';
import playIcon from "../../../assets/images/playIcon.png";
const VideoPlayer = ({ thumbnailSrc, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  
  return (
    <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
      {!isPlaying ? (
        <>
          <img 
            src={thumbnailSrc} 
            alt="Video thumbnail" 
            className="absolute inset-0 w-full h-full object-cover"
          />
           <img 
            src={playIcon} 
            alt="Video thumbnail" 
            className="absolute inset-0 m-auto w-24 cursor-pointer h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none z-10"
          />
      
          <div className="absolute inset-0 bg-black/20"></div>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={videoSrc}
          title="Treatment video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;