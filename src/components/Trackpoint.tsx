"use client";

import useMousePosition from '@/hooks/useMousePosition'
import { IVec2d } from '@/types/IVec2d';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Trackpoint() {
  const { x, y } = useMousePosition();

  const [coord, setCoord] = useState<IVec2d>({x: 0, y: 0});

  // useEffect(() => {
  //   setCoord(mouse);
  // }, [])
  // useEffect(() => {
  //   setCoord(mouse);
  // }, [mouse])


  // console.log(mouse);
  return (
    <motion.div
      className='fixed h-8 w-8 bg-red-500 will-change-auto'
      // animate={{
      //   top: y,
      //   left: x,
      // }}
      // transition= {
			// 	{type: "tween",
			// 	duration: 0.01}
      // }  
      style={{
        left: x,
        top: y
      }}
    ></motion.div>
  )
}

export default Trackpoint