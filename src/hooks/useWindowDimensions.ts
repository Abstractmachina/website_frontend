import { IVec2d } from '@/types/IVec2d';
import { useState, useEffect } from 'react';

function getWindowDimensions() : IVec2d {
  const { innerWidth: width, innerHeight: height } = window;
  return {
      x:width,
    y: height
  };
}

export default function useWindowDimensions() : IVec2d {
  const [windowDimensions, setWindowDimensions] = useState<IVec2d>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}