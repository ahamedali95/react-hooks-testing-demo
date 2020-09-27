import React from 'react';
// import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import ScreenSizeNeeder from './ScreenSizeNeeder';

const Home = props => {
  const setCount = (count) => {
    console.log(count);
  };

  return (
    <>
      <h1>WELCOME HOME</h1>
      {/*<UseStateExample />*/}
      <UseEffectExample />
      <ScreenSizeNeeder />
    </>
  );
};

export default Home;

