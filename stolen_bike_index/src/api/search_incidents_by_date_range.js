import axios from "axios";
import { baseURL } from "../config/shared";

export const searchIncidentsByDateRange = (occurred_after, occurred_before) => (
  axios({
    method: 'get',
    url: 'incidents',
    baseURL,
    params: { occurred_after, occurred_before, proximity: 'Berlin' }
  }).then(response => response).catch(error => error));