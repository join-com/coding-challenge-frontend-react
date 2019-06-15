import React from 'react'
import { shallow } from 'enzyme'
import Details from './Details'

it('renders the Details', () => {
  const wrapper = shallow(<Details match={{ params: { id: 1 } }} />)
  expect(wrapper).toMatchSnapshot()
})
