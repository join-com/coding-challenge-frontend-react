import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

it('renders the header', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})
