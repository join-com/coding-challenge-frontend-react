import React from 'react'
import { shallow } from 'enzyme'
import List from './List'

it('renders the List', () => {
  const wrapper = shallow(<List />)
  expect(wrapper).toMatchSnapshot()
})
