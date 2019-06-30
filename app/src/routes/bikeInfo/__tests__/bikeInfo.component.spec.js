import React from 'react';
import { shallow } from 'enzyme';

import { BikeInfo } from '../bikeInfo.component';

describe('BikeInfo: Component', () => {
  const defaultProps = {};

  const component = props => <BikeInfo {...defaultProps} {...props} />;

  const render = (props = {}) => shallow(component(props));

  it('should render correctly', () => {
    const wrapper = render();
    global.expect(wrapper).toMatchSnapshot();
  });
});
