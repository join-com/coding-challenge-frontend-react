import { shallow } from 'enzyme';
import React from 'react';

import { Header } from './header';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <h1>
    Police Department of Berlin
  </h1>
  <h2>
    Stolen bikes
  </h2>
</Fragment>
`);
});
