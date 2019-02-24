import axios from 'axios';
import { baseURL } from "../config/shared";

export const getIncidentLocation = () => (
  axios({
    method: 'get',
    url: 'locations',
    baseURL,
    params: { proximity_square: 100, proximity: 'Berlin' }
  }).then(response => response).catch(error => error));