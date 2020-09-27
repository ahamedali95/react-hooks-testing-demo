import React from 'react';
import { shallow, mount } from 'enzyme/build';

export const setUpWithShallow = (Component, props={}) => (shallow(<Component {...props} />));
export const setUpWithMount = (Component, props={}) => (mount(<Component {...props} />));
export const findByTestAttr = (wrapper, value) => (wrapper.find({ 'data-test':  value }));

const TestHook = props => {
  props.callback();

  return null;
};

// helper for testing custom hooks
export const testHook = props => (setUpWithMount(TestHook, props));
