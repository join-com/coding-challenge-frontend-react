import { axios } from '@/libs/axios'
import { SEARCH_RADIUS, RESULTS_MAX_QTY } from '@/constants'

const INCIDENT_TYPE = 'theft'

export const getIncidents = (qty = RESULTS_MAX_QTY) =>
  axios.get(
    `/incidents?page=1&per_page=${qty}&incident_type=${INCIDENT_TYPE}&proximity=Berlin&proximity_square=${SEARCH_RADIUS}`,
  )
