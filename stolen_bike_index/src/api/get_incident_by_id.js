import axios from 'axios';
import { baseURL } from "../config/shared";

export const getIncidentById = id => (
  axios({
    method: 'get',
    url: `incidents/${id}`,
    baseURL
  }).then(response => response).catch(error => error));