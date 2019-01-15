import React from 'react'
import Counter from './index'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'

test('Counter should be null when its loading', () => {
  const component = renderer.create(<Counter isLoading={true} totalRecords={5} />)
  let tree = component.toJSON()
  expect(tree).toBeNull()
})

test('Counter should return count', () => {
  const component = render(<Counter isLoading={false} totalRecords={5} />)
  expect(component).toMatchSnapshot()
  expect(component.text()).toBe('Total reported incidents5')
})
