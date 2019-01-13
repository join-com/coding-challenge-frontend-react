import { APPLY_FILTER, SET_TOTAL_RECORDS, CLEAR_FILTER } from '../constants'

const filter = (incidents, { search }) => {
  if (incidents.length === 0) {
    return incidents
  }

  if (search !== null) {
    incidents = incidents.filter(({ title, description, address }) => {
      const textFilter = `${title} ${description} ${address}`.toLocaleLowerCase()
      return textFilter.indexOf(search) !== -1
    })
  }

  return incidents
}

export const filterIncidents = payload => {
  const incidents = filter(payload.incidents, payload.filterOn)
  return dispatch => {
    dispatch({ type: APPLY_FILTER, payload: incidents })
    dispatch({ type: SET_TOTAL_RECORDS, payload: incidents.length })
  }
}

export const clearFilter = incidents => {
  return dispatch => {
    dispatch({ type: CLEAR_FILTER })
    dispatch({ type: SET_TOTAL_RECORDS, payload: incidents.length })
  }
}
