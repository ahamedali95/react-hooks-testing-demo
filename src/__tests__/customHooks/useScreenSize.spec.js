import useScreenSize from '../../customHooks/useScreenSize';
import {testHook} from '../testUtils';

/*
  Note: We cannot simply invoke our custom hook and assert on the return value. One of the rules of hooks states that a
  hook can only be called inside a functional component, not inside a regular JS function. For this reason, we have
  created a `testHook` utility to mount a functional component(TestHook) and pass our custom hook as props to this component so that it
  can be invoked and then we can retrieve the results of executing our custom hook and make assertions.
 */
describe('useScreenSize.js', () => {
  const windowCopy = window;
  // Jest uses JSDom so we have access to the window object
  beforeEach(() => {
    window.innerWidth = 200;
    window.innerHeight = 100;
  });

  afterAll(() => {
    window = windowCopy;
  });

  it('should return the correct screen size', () => {
    let size, setSize;
    /*
      The following callback will be invoked inside the TestHook functional component
     */
    const callback = () => {
      [size, setSize] = useScreenSize();
    };
    testHook({callback});

    expect(size).toEqual({ width: 200, height: 100 });
  });
});