import React from 'react';

const VideoPlayer = () => {
  return <video width="600" height="342" src={require('../assets/victoria.mp4')} controls />;
};

export default VideoPlayer;
