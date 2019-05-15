import { axios } from '@/libs/axios'
// @ts-ignore
import { getUnixTime } from 'date-fns/esm'
import {
  SEARCH_RADIUS,
  RESULTS_MAX_QTY,
  INCIDENT_TYPE as THEFT,
} from '@/constants'

type Params = {
  perPage?: number
  query?: string
  occurredBefore?: string
  occurredAfter?: string
}

const apiFields: {
[keyname: string]: string
} = {
  occurredBefore: 'occurred_before',
  occurredAfter: 'occurred_after',
  query: 'query',
}

const formatters: {
[keyname: string]: (value: string) => Date
} = {
  occurred_before: (value: string) => getUnixTime(new Date(value)),
  occurred_after: (value: string) => getUnixTime(new Date(value)),
}

const identity = (value: string) => value

const formatParams = (params: Params) =>
  Object.entries(params).reduce((acc, current) => {
    const [key, value] = current
    const apiField = apiFields[key]
    const formatter = formatters[apiField] || identity
    const formattedValue = formatter(JSON.stringify(value))
    return {
      ...acc,
      [apiField]: formattedValue,
    }
  }, {})

export const getIncidents = ({ perPage, ...rest }: Params) => {
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
