import React from 'react'
import Error from './index'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Error />', () => {
  it('Error component accepts message prop', () => {
    const wrapper = shallow(<Error message="Oops, something goes wrong"/>)
    expect(wrapper.getElement().props.children).toBe('Oops, something goes wrong')
  })
})