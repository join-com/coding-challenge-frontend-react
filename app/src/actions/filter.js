import { APPLY_FILTER, SET_TOTAL_RECORDS, CLEAR_FILTER } from '../constants'

const filter = (incidents, { search, fromDate, toDate }) => {
  if (incidents.length === 0) {
    return incidents
  }

  incidents = incidents.filter(
    ({ title, description, address, occurred_at }) => {
      const textFilter =
        search !== null
          ? `${title} ${description} ${address}`
              .toLocaleLowerCase()
              .indexOf(search) !== -1
          : true
      const dateFromFilter =
        fromDate !== null ? occurred_at >= fromDate.getTime() / 1000 : true
      const dateToFilter =
        toDate !== null ? occurred_at <= toDate.getTime() / 1000 : true
      return textFilter && dateFromFilter && dateToFilter
    }
  )

  return incidents
}

export const filterIncidents = payload => {
  const incidents = filter(payload.incidents, payload.filter)
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
