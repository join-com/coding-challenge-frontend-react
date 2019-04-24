import React from 'react'
import ReactDOM from 'react-dom'
import Error from './index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Error />, div)
  ReactDOM.unmountComponentAtNode(div)
})