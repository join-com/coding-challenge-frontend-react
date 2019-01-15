import React from 'react'
import PaginationComponent from './index'
import { render } from 'enzyme'

test('Should render loading component', () => {
  const component = render(<PaginationComponent isLoading={true} />)
  expect(component).toMatchSnapshot()
})
