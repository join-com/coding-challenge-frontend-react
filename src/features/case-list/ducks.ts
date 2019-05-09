import { createRequestAction, createReducer } from '@/libs/redux-act'

export const storeKey = 'cases'

export const loadCases = createRequestAction(`${storeKey}/loadCases`)

const initialState = {
  cases: [],
  isLoading: false,
}

const casesReducer = createReducer<typeof initialState>({}, initialState)

casesReducer.on(loadCases.request, state => ({ ...state, isLoading: true }))
casesReducer.on(loadCases.success, (state, { cases }) => ({
  ...state,
  isLoading: false,
  cases,
}))

export { casesReducer }
