import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: 'https://bikewise.org:443/api/v2',
})

export { axios }
