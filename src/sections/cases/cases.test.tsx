import { shallow } from 'enzyme';
import React from 'react';

import { Cases, setQueryResetPage } from './cases';

it('renders without crashing', () => {
  const wrapper = shallow(<Cases />);
  expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <SearchBar
    onChange={[Function]}
    query=""
  />
  <CasesList
    filters={
      Object {
        "query": "",
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

it('setQueryResetPage resets page to first', () => {
  const mockSetQuery = jest.fn();
  const mockSetPage = jest.fn();
  const handleChange = setQueryResetPage(mockSetQuery, mockSetPage);

  handleChange('new query');
  expect(mockSetQuery).toBeCalledWith('new query');
  expect(mockSetPage).toBeCalledWith(1);
});
