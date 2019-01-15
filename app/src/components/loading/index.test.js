import React from 'react'
import LoadingHCIComponent from './index'
import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'

const testComponent = props => <div>Test Component</div>

test('Should render loading component', () => {
  const Loader = LoadingHCIComponent(testComponent)
  const component = render(<Loader isLoading={true} />)
  expect(component).toMatchSnapshot()
})

test('Should render provided component when not in loading', () => {
  const Loader = LoadingHCIComponent(testComponent)
  const component = render(<Loader isLoading={false} />)
  expect(component).toMatchSnapshot()
})
