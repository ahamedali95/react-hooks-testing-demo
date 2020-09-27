import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/*
   Study the `useState` example before looking at this example
 */
const UseEffectExample = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.setCount(count);
  });
  /*
    In our application, sometimes we want to perform side effects such as API requests to fetch data, registering events
    on mount and so on, followed by cleanup when our components unmounts. Typically, these side effects and cleanup are
    only performed in class components via React’s lifecycle methods. But thanks to the useEffect hook, it is now possible
    to perform these actions in functional components. Without going in to detail. useEffect simply combines the power of
    componentDidMount, componentDidUpdate and componentWillUnmount lifecycle methods used in class components with some caveats.
    In the above use case, we just wanted to report the current `count` value to our parent component `Home.` This effect will run
    both during the initial render and the updating phase(when the count updates). Use the optional second argument of `useEffect` to
    control rerunning the effect.
   */

  return (
    <div data-test="use-effect-example-component">
      <label data-test="use-effect-example-label">{count}</label>
      <br />
      <button
        data-test="use-effect-example-button"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment count
      </button>
    </div>
  );
};

UseEffectExample.propTypes = {
  setCount: PropTypes.func.isRequired
};

UseEffectExample.defaultProps = {
  setCount: () => {}
};

export default UseEffectExample;