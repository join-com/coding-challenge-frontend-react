import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Error from './';

Enzyme.configure({ adapter: new Adapter() });

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Error {...props}>
    {children}
  </Error>
);

describe('<Error />', () => {
  it('renders children', () => expect(renderComponent().contains(children)).toBe(true));
});
