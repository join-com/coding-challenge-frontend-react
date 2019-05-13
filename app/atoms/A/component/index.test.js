import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import A from './';

Enzyme.configure({ adapter: new Adapter() });

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <A href="http://github.com/" {...props}>
    {children}
  </A>
);

describe('<A />', () => {
  it('renders children', () => expect(renderComponent().contains(children)).toEqual(true));
});
