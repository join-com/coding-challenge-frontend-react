import {
  createRequestAction,
  createReducer,
  createAction,
} from '@/libs/redux-act'

export const storeKey = 'incidents'

export const loadIncidents = createRequestAction(`${storeKey}/loadIncidents`)
export const selectPage = createAction(`${storeKey}/selectPage`)

export type State = {
  incidents: NormalizedIncidents
  isLoading: boolean
  selectedPage: undefined | number
}

const initialState = {
  incidents: {},
  isLoading: false,
  selectedPage: undefined,
}

const incidentsReducer = createReducer<State>({}, initialState)

incidentsReducer.on(loadIncidents.request, state => ({
  ...state,
  isLoading: true,
}))
incidentsReducer.on(selectPage, (state, { page }: { page: number }) => ({
  ...state,
  selectedPage: page,
}))
incidentsReducer.on(loadIncidents.success, (state, { incidents }) => ({
  ...state,
  isLoading: false,
  selectedPage: 1,
  incidents,
}))

export { incidentsReducer }
