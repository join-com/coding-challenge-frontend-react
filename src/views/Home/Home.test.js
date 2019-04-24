import React from 'react'
import Home from './index'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import "isomorphic-fetch"

configure({ adapter: new Adapter() })

describe('<Home />', () => {
  it('Renders <Home /> component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.exists()).toBe(true)
  })

  it('Pagination: changing page is working', () => {
    const wrapper = shallow(<Home />)
    wrapper.instance().handlePagination(2);
    expect(wrapper.instance().state.currentPage).toBe(2)
  })
})