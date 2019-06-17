import React from 'react'
import { mount, shallow } from 'enzyme'
import SearchCaseInput from './SearchCaseInput'

it('renders the SearchCaseInput without crashing', () => {
  const wrapper = shallow(<SearchCaseInput />)
  expect(wrapper).toMatchSnapshot()
})

it('triggers the onChange event and pass the value', () => {
  const spy = jest.fn(event => event.target.value)
  const wrapper = mount(<SearchCaseInput onChange={spy}/>)

  const input = wrapper.find('input').first()
  const value = 'A'
  input.simulate('change', {target: { value}})
  expect(spy).toHaveBeenCalledTimes(1)
  expect(spy).toHaveReturnedWith(value)
})
