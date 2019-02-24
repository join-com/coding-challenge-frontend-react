import axios from 'axios';
import { baseURL } from "../config/shared";

export const getAllIncidents = () => (
  axios({
    method: 'get',
    url: 'incidents',
    baseURL,
    params: { proximity: 'Berlin' }
  }).then(response => response).catch(error => error));