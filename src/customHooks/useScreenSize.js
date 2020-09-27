import React, { useState, useEffect } from 'react';

/**
 * A custom hook which keeps track of the screen size and presents the width and height of the screen in pixels to
 * components where this hook is being used. See `ScreeSizeNeeder` component.
 *
 * @function useScreenSize
 * @return {Array} 1st element - { width, height }; 2nd element - setSize(), a set state function
 */

const useScreenSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize");
  }, []);

  return [size, setSize];

  // const [count, setCount] = useState(0);
  // const increment = () => setCount(count + 1);
  //
  // return [count, increment];
};

export default useScreenSize;