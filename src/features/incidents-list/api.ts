import { axios } from '@/libs/axios'
import { getUnixTime } from 'date-fns/esm'
import { identity } from './utils'
import {
  SEARCH_RADIUS,
  RESULTS_MAX_QTY,
  INCIDENT_TYPE as THEFT,
} from '@/constants'

import { LoadIncidentsPayload } from './ducks'

const apiFields: {
[keyname: string]: string
} = {
  occurredBefore: 'occurred_before',
  occurredAfter: 'occurred_after',
  query: 'query',
  perPage: 'per_page',
}

const formatters: {
[keyname: string]: (value: string | number) => Date
} = {
  occurred_before: (value: string | number) => getUnixTime(new Date(value)),
  occurred_after: (value: string | number) => getUnixTime(new Date(value)),
}

const formatParams = (params: LoadIncidentsPayload) =>
  Object.entries(params).reduce((acc, current) => {
    const [key, value] = current
    const apiField = apiFields[key]
    const formatter = formatters[apiField] || identity

    const formattedValue = value && formatter(value)
    return {
      ...acc,
      [apiField]: formattedValue,
    }
  }, {})

export const getIncidents = ({ perPage, ...rest }: LoadIncidentsPayload) => {
  const resultsQty = perPage || RESULTS_MAX_QTY
  return axios.get('/incidents?page=1', {
    params: {
      per_page: resultsQty,
      proximity: 'Berlin',
      incident_type: THEFT,
      proximity_square: SEARCH_RADIUS,
      ...formatParams(rest),
    },
  })
}

export const getSingleIncident = ({ id }: { id: string }) =>
  axios.get(`https://bikewise.org:443/api/v2/incidents/${id}`)

export interface GeoRequestParams {
  occurred_at: number
  title: string
}

export const getGeoJson = ({ occurred_at, title }: GeoRequestParams) =>
  axios.get('/locations?', {
    params: {
      occurred_before: occurred_at + 1, // api sometimes return nothing with exact timestamps
      occurred_after: occurred_at - 1,
      incident_type: THEFT,
      query: title,
    },
  })
