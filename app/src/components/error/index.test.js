import React from 'react'
import Error from './index'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'

test('Should render error component', () => {
  const component = renderer.create(<Error />)
  let tree = component.toJSON()
  expect(tree).not.toBeNull()
  expect(component).toMatchSnapshot()
})

test('Error component should show error', () => {
  const component = render(<Error />)
  expect(component).toMatchSnapshot()
  expect(component.text()).toBe('An error has occured')
})
