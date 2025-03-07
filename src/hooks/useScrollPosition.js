import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [direction, setDirection] = useState(null);
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Determine scroll direction
      if (position > lastPosition) {
        setDirection('down');
      } else if (position < lastPosition) {
        setDirection('up');
      }
      
      setLastPosition(position);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);

    // Clean up
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastPosition]);

  return {
    scrollPosition,
    direction,
    isScrolling: scrollPosition > 20,
    isAtTop: scrollPosition === 0,
  };
};

export default useScrollPosition;