import React from 'react'
import { shallow } from 'enzyme'
import Details from './Details'

it('renders the Details', () => {
  const wrapper = shallow(<Details />)
  expect(wrapper).toMatchSnapshot()
})
