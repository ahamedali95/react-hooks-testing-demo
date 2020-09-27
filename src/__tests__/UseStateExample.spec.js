import UseStateExample from '../components/UseStateExample';
import {findByTestAttr, setUpWithShallow} from './testUtils';

describe('UseStateExample.js', () => {
  let wrapper, component, label, button;

  beforeEach(() => {
    wrapper = setUpWithShallow(UseStateExample);
    component = findByTestAttr(wrapper, 'use-state-example-component');
    label = findByTestAttr(wrapper, 'use-state-example-label');
    button = findByTestAttr(wrapper, 'use-state-example-button');
  });

  describe('INITIAL RENDER CHECK', () => {
    it('should render without error', () => {
      expect(component.exists()).toBeTruthy();
    });

    it('should display appropriate counter value', () => {
      expect(parseInt(label.text())).toBe(0);
    });
  });

  describe('EVENT HANDLING CHECK', () => {
    it('should update the count value', () => {
      button.simulate('click');
      const label = findByTestAttr(wrapper, 'use-state-example-label');

      expect(parseInt(label.text())).toBe(1);
    });
  });
});