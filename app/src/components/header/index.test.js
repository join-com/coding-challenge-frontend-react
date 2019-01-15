import React from 'react'
import Header from './index'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'

test('Should render header component', () => {
  const component = renderer.create(<Header banner={'test banner '} />)
  let tree = component.toJSON()
  expect(tree).not.toBeNull()
  expect(component).toMatchSnapshot()
})

test('Should show banner', () => {
  const component = render(<Header banner={'test banner '} />)
  expect(component).toMatchSnapshot()
  expect(component.text()).toBe('test banner Stolen bykes')
})
