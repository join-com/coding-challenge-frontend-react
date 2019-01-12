import {
  REQUEST_INCIDENTS,
  REQUEST_INCIDENTS_BY_ID_FULFILLED,
  REQUEST_INCIDENTS_BY_ID,
  FAILURE,
  SUCCESS,
  REQUEST_INCIDENTS_FULFILLED,
  CHANGE_PAGE,
  CHANGE_PAGE_NUMBER
} from '../constants'

const initState = {
  banner: 'Police department of Berlin',
  isLoading: true,
  hasError: false,
  totalRecords: 0,
  incidents: [],
  currentPage: 1
}

export default function root(state = initState, action) {
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case REQUEST_INCIDENTS_FULFILLED:
      return {
        ...nextState,
        incidents: action.payload.incidents,
        isLoading: false,
        totalRecords: action.payload.incidents.length
      }
    case REQUEST_INCIDENTS_BY_ID_FULFILLED:
      return {
        ...nextState,
        incident: action.payload.incident,
        isLoading: false
      }
    case CHANGE_PAGE:
    case REQUEST_INCIDENTS_BY_ID:
    case REQUEST_INCIDENTS:
      return { ...nextState, isLoading: true }
    case FAILURE:
      return { ...nextState, hasError: true }
    case SUCCESS:
      return { ...nextState, isLoading: false }
    case CHANGE_PAGE_NUMBER:
      return { ...nextState, currentPage: action.payload }
    default:
      return state
  }
}
