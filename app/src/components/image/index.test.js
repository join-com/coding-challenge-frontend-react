import React from 'react'
import Image from './index'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'

test('Should render image component with image not available', () => {
  const component = renderer.create(<Image />)
  let tree = component.toJSON()
  expect(tree).not.toBeNull()
  expect(component).toMatchSnapshot()
})

test('Should render image component with image src', () => {
  const component = render(<Image src={'/path/to/image'} />)
  expect(component).toMatchSnapshot()
})

test('Should render image component with image src and style', () => {
  const component = render(<Image src={'/path/to/image'} style={{ maxWidth: '50px' }} />)
  expect(component).toMatchSnapshot()
})
