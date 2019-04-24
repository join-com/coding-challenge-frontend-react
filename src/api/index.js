import { dateToStamp } from '../utils/dateUtil'
import { API_DOMAIN } from 'constants'

export const getIncidents = (query = '', startDate = '', endDate = '') => (
  fetch(`${API_DOMAIN}/incidents?incident_type=theft&page=1&per_page=1000${startDate && '&occurred_at=' + dateToStamp(startDate)}${endDate && '&occurred_before=' + dateToStamp(endDate)}&proximity=Berlin${query && '&query=' + query}`)
)

export const fetchIncident = id => (
  fetch(`${API_DOMAIN}/incidents/${id}`)
)

export const fetchLocations = (timestamp, title) => (
  fetch(
    `${API_DOMAIN}/locations?incident_type=theft&occurred_before=${timestamp}&occurred_after=${timestamp}&query=${title}`
  )
)
