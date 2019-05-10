import { createRequestAction, createReducer } from '@/libs/redux-act'
import { AnyAction } from 'redux'

export const storeKey = 'cases'

export const loadCases = createRequestAction(`${storeKey}/loadCases`)

type State = {
  cases: any[]
  isLoading: boolean
}

const initialState = {
  cases: [],
  isLoading: false,
}

const casesReducer = createReducer<State>({}, initialState)

casesReducer.on(loadCases.request, state => ({ ...state, isLoading: true }))
casesReducer.on(loadCases.success, (state, { cases }) => ({
  ...state,
  isLoading: false,
  cases,
}))

export { casesReducer }
