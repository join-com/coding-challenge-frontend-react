import { axios } from '@/libs/axios'

export const getIncidents = () =>
  axios.get(
    '/incidents?page=1&per_page=10&proximity=Berlin&proximity_square=100',
  )
