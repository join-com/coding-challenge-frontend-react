import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#test').length).toEqual(1)
});
