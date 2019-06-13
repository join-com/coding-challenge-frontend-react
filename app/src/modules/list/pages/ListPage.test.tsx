import * as React from 'react'
import * as RR from 'react-redux'
import { shallow } from 'enzyme'

import { ListPage } from './ListPage'
import { createRequestState } from '../../../instructions'
import { ErrorState, LoadingState } from '../../common'
import { BikesList } from '../containers'

const selectorMock = jest.fn()
const dispatchMock = jest.fn()
;(RR as any).useSelector = selectorMock
;(RR as any).useDispatch = dispatchMock

function getWrapper() {
  return shallow(<ListPage />)
}

describe('ListPage component', () => {
  let request = createRequestState('')
  beforeEach(() => {
    selectorMock.mockReturnValue(Object.assign(request, createRequestState('')))
  })
  it('should render without crash', () => {
    getWrapper()
  })

  it('should dispatch an action', () => {
    getWrapper()
    expect(dispatchMock).toBeCalled()
  })

  it('should render loading state', () => {
    const rendered = getWrapper()
    expect(rendered.find(LoadingState).length).toBe(1)
    expect(rendered.find(BikesList).length).toBe(0)
    expect(rendered.find(ErrorState).length).toBe(0)
  })

  it('should render error state', () => {
    request.error = new Error('')
    request.isLoading = false
    const rendered = getWrapper()
    expect(rendered.find(ErrorState).length).toBe(1)
    expect(rendered.find(LoadingState).length).toBe(0)
    expect(rendered.find(BikesList).length).toBe(0)
  })

  it('should render list of incidents', () => {
    request.error = null
    request.isLoading = false
    const rendered = getWrapper()
    expect(rendered.find(BikesList).length).toBe(1)
    expect(rendered.find(ErrorState).length).toBe(0)
    expect(rendered.find(LoadingState).length).toBe(0)
  })
})
