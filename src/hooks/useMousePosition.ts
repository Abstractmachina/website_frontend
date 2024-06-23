import { IVec2d } from '@/types/IVec2d';
import React from 'react';
const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: undefined, y: undefined } as IVec2d);
  React.useEffect(() => {
    const updateMousePosition = (ev:any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;