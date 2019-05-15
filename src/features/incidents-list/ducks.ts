import {
  createRequestAction,
  createReducer,
  createAction,
} from '@/libs/redux-act'

export const storeKey = 'incidents'

export const loadIncidents = createRequestAction(`${storeKey}/loadIncidents`)
export const loadFirstPage = createRequestAction(`${storeKey}/loadFirstPage`)
export const loadSingleIncident = createRequestAction(
  `${storeKey}/loadSingleIncident`,
)
export const selectPage = createAction(`${storeKey}/selectPage`)

export type State = {
  incidents: NormalizedIncidents
  isLoading: boolean
  selectedPage: undefined | number
  firstPageLoading: boolean
}

const initialState = {
  incidents: {},
  isLoading: false,
  firstPageLoading: false,
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
  incidents: {
    ...state.incidents,
    ...incidents,
  },
}))

incidentsReducer.on(loadIncidents.failure, state => ({
  ...state,
  firstPageLoading: false,
}))

incidentsReducer.on(loadFirstPage.request, state => ({
  ...state,
  firstPageLoading: true,
}))

incidentsReducer.on(loadFirstPage.success, (state, { incidents }) => ({
  ...state,
  firstPageLoading: false,
  selectedPage: 1,
  incidents: {
    ...state.incidents,
    ...incidents,
  },
}))

incidentsReducer.on(loadFirstPage.failure, state => ({
  ...state,
  firstPageLoading: false,
}))

incidentsReducer.on(loadSingleIncident.success, (state, { incident }) => ({
  ...state,
  incidents: {
    ...state.incidents,
    ...incident,
  },
}))

export { incidentsReducer }
