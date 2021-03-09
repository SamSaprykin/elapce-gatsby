import { useState, useEffect, useRef } from 'react';
import { wrap } from 'popmotion';

export const swipePower = (offsetX, velocityX) => Math.abs(offsetX) * velocityX;
export const useMotionSlider = (
  data,
  { nextSlideTime = 60000 },
) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const intervalRef = useRef(0);

  const currentIndex = wrap(0, data.length, page);

  const handleChangeSlide = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  

  useEffect(() => {
    intervalRef.current = setInterval(
      () => handleChangeSlide(1),
      nextSlideTime,
    );

    return () => clearInterval(intervalRef.current);
  }, [handleChangeSlide]);

  return {
    state: [page, direction],
    currentIndex,
    handleChangeSlide,
  };
};