import { APPLY_FILTER, CLEAR_FILTER } from '../constants'

const initialState = {
  filterApplied: false,
  filteredIncidents: []
}
export default (state = initialState, action) => {
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case APPLY_FILTER:
      return {
        ...nextState,
        filteredIncidents: action.payload,
        filterApplied: true
      }
    case CLEAR_FILTER:
      return { ...nextState, filterApplied: false, filterIncidents: [] }
    default:
      return state
  }
}
