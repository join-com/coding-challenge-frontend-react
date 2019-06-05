import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Image from './Image'

describe('<Image /> spec', () => {
  it('renders the component', () => {
    const component = render(<Image />)
    expect(component).toMatchSnapshot()
  })
});