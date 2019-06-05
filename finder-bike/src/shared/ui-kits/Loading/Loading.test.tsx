import React from 'react'
import { render } from '@testing-library/react'
import Loading from './Loading'

describe('<Loading /> spec', () => {
  it('renders the component', () => {
    const component = render(
      <Loading />
    )
    expect(component).toMatchSnapshot()
  })
});