import axios from "axios";
import { baseURL } from "../config/shared";

export const getIncidentsWithPagination = page => (
  axios({
    method: 'get',
    url: 'incidents',
    baseURL,
    params: { per_page: 10, page, proximity: 'Berlin' }
  }).then(response => response).catch(error => error));