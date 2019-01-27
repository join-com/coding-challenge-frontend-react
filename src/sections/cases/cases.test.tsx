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
  <CasesList
    data={
      Object {
        "loading": true,
      }
    }
    page={
      Object {
        "set": [Function],
        "value": 1,
      }
    }
    pageSize={5}
  />
</Fragment>
`);
});
