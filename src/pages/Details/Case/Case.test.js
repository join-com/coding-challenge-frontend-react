import React from 'react'
import { shallow } from 'enzyme'
import Case from './Case'

it('renders the Case', () => {
  const item = {
    title: 'title',
    description: 'description',
    occurred_at: 12214324324,
    address: 'Halle, 06120, DE',
  }
  const wrapper = shallow(<Case item={item} />)
  expect(wrapper).toMatchSnapshot()
})
