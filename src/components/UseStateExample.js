import React, { useState } from 'react';

const UseStateExample = props => {
  /*
    As the name suggests, `useStatehook` allows to define and use local state in functional components.
   */
  const [count, setCount] = useState(0);

  /*
    As you can see, state is now defined as state variables(which can hold both primitive and complex data types) and can
    be referred inside the component by name, in this case, `count`. And the argument given to the useState will serve
    as an initial value of this state variable. However, these state variables act very differently from normal variables
    as their values are preserved between renders by React. Normally, the variables are reset when a function exists
    but this is not the case with state variables inside functional components. Furthermore, the function `setCount` allows
    to update the `count` state variable – very similar to this.setState inside class components.
   */

  return (
    <div data-test="use-state-example-component">
      <label data-test="use-state-example-label">{count}</label>
      <br />
      <button
        data-test="use-state-example-button"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment count
      </button>
    </div>
  );
};

export default UseStateExample;