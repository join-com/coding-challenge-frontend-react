import config from '../config/base'
import {
  FAILURE,
  REQUEST_INCIDENTS,
  REQUEST_INCIDENTS_BY_ID
} from '../constants'

const isSuccess = response => {
  if (!response.ok) {
    throw new Error(FAILURE)
  }
  return response.json()
}

export const fetchIncidents = () => {
  return {
    type: REQUEST_INCIDENTS,
    payload: fetch(`${config.endpoint}incidents?proximity=berlin`)
      .then(isSuccess)
      .then(response => {
        console.log(response)
        return response
      })
  }
}

export const fetchIncidentsByID = (id) => {
  return {
    type: REQUEST_INCIDENTS_BY_ID,
    payload: fetch(`${config.endpoint}incidents/${id}`)
      .then(isSuccess)
      .then(response => {
        console.log(response)
        return response
      })
  }
}
