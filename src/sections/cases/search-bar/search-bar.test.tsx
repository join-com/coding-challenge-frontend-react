import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

import { SearchBar } from './search-bar';

let wrapper: ShallowWrapper<SearchBar>;

beforeEach(() => {
  const mockProps = {
    onChange: jest.fn(),
    query: 'test',
  };

  wrapper = shallow(<SearchBar {...mockProps} />);
});

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('calls onChange by search button click', () => {
  const instance = wrapper.instance() as SearchBar;
  const onChange = instance.props.onChange;
  const e = { preventDefault: jest.fn() };

  wrapper.simulate('submit', e);
  expect(onChange).toBeCalledTimes(0);

  instance.queryInput = { current: { input: { value: 'new' } } } as any;
  wrapper.simulate('submit', e);
  expect(onChange).toBeCalledWith('new');
});
