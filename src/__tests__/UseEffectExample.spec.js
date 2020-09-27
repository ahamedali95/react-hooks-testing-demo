import UseEffectExample from '../components/UseEffectExample';
import {findByTestAttr, setUpWithMount} from './testUtils';

describe('UseEffectExample.js', () => {
  let wrapper, component, label, button;
  const setCountMock = jest.fn();

  beforeEach(() => {
    /*
      Notice we used mount to trigger the effect - useEffect is not supported when using shallow
     */
    wrapper = setUpWithMount(UseEffectExample, { setCount: setCountMock });
    component = findByTestAttr(wrapper, 'use-effect-example-component');
    label = findByTestAttr(wrapper, 'use-effect-example-label');
    button = findByTestAttr(wrapper, 'use-effect-example-button');
  });

  afterEach(() => {
    setCountMock.mockReset();
  });

  describe('INITIAL RENDER CHECK', () => {
    it('should render without error', () => {
      expect(component.exists()).toBeTruthy();
    });

    it('should display appropriate counter value', () => {
      expect(parseInt(label.text())).toBe(0);
    });

    /* NEW CODE */
    it('should call ~setCountMock~ with appropriate value', () => {
      expect(setCountMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('EVENT HANDLING CHECK', () => {
    it('should update the count value', () => {
      button.simulate('click');
      const label = findByTestAttr(wrapper, 'use-effect-example-label');

      expect(parseInt(label.text())).toBe(1);
    });


    /* NEW CODE */
    it('should call ~setCountMock~ with appropriate value', () => {
      expect(setCountMock).toHaveBeenCalledTimes(1);
    });
  });
});