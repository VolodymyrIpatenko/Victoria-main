import React from 'react';

const VideoPlayer = () => {
  return <video className="video" src={require('../assets/victoria.mp4')} controls />;
};

export default VideoPlayer;
