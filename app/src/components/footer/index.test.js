import React from 'react'
import Footer from './index'
import renderer from 'react-test-renderer'

test('Should render error component', () => {
  const component = renderer.create(<Footer />)
  let tree = component.toJSON()
  expect(tree).not.toBeNull()
  expect(component).toMatchSnapshot()
})
