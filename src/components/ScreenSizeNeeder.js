import React from 'react';
import useScreenSize from '../customHooks/useScreenSize';

const ScreenSizeNeeder = props => {
  const [size, setSize] = useScreenSize();

  return (
    <>
      <h3>Width: {size.width}</h3>
      <h3>Height: {size.height}</h3>
    </>
  );
};

export default ScreenSizeNeeder;