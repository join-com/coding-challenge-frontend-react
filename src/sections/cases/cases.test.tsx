import { shallow } from 'enzyme';
import React from 'react';

import { Cases } from './cases';

it('renders without crashing', () => {
  const wrapper = shallow(<Cases />);
  expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <SearchBar
    onChange={[Function]}
    query=""
  />
</Fragment>
`);
});
