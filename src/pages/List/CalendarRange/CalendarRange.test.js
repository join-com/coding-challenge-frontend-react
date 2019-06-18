import React from 'react'
import { shallow } from 'enzyme'
import CalendarRange from './CalendarRange'

it('renders the CalendarRange', () => {
  const wrapper = shallow(<CalendarRange />)
  expect(wrapper).toMatchSnapshot()
})
