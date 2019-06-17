import React from 'react'
import { mount, shallow } from 'enzyme'

import SearchButton from './SearchButton'

it('renders the Button without crashing', () => {
  const wrapper = shallow(<SearchButton />)
  expect(wrapper).toMatchSnapshot()
})

it('triggers onClick when clicked', () => {
  const spy = jest.fn()
  const wrapper = mount(<SearchButton onClick={spy} />)
  wrapper.simulate('click')
  expect(spy).toHaveBeenCalledTimes(1)
})
