"use client";

import useMousePosition from '@/hooks/useMousePosition'
import useArchStore from '@/stores/archStore';
import { IVec2d } from '@/types/IVec2d';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Trackpoint() {
  const { x, y } = useMousePosition();
  const trackpointAX = useArchStore((state) => state.trackpointAX);
  const trackpointAY = useArchStore((state) => state.trackpointAY);
  const [diameter, setDiameter] = useState<number>(24);
  const isTrackpointAEnabled = useArchStore((state) => state.isTrackpointAEnabled);

  // private calibrated x position
  const _x = trackpointAX ? trackpointAX - (diameter / 2) : undefined;
  const _y = y ? trackpointAY - (diameter / 2) : undefined;

  return (
    <motion.div
      className='fixed h-8 w-8 bg-red-500 will-change-auto'
      animate={{
        left: _x,
        opacity: isTrackpointAEnabled ? 1 : 0,
      }}
      transition={{
        ease: 'circInOut',
        duration: 1
      }}  
      style={{
        left: _x,
        top: _y,
        height: diameter,
        width: diameter,
        visibility: _x && y ? 'visible' : 'hidden'
      }}
    ></motion.div>
  )
}

export default Trackpoint