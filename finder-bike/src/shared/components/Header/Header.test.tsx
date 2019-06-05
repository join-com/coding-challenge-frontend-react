import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('<Header /> spec', () => {
  it('renders the component', () => {
    const component = render(<Header>Hello</Header>)
    expect(component).toMatchSnapshot()
  })
});