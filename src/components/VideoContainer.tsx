'use client';

import React, { FC } from 'react'
import ReactPlayer from 'react-player';

type VideoContainerProps = {
    url: string;
}

const VideoContainer : FC<VideoContainerProps> = ({url}) => {
  return (
      <ReactPlayer url={ url} controls />
  )
}

export default VideoContainer