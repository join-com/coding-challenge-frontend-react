import apisauce from 'apisauce';
import moment from 'moment';
import {
  BIKEWISE_API_URL,
  ADDRESS,
  PAGESIZE,
  SEARCHSQUARE,
  CASETYPE,
} from './constants';

function create() {
  const api = apisauce.create({
    baseURL: BIKEWISE_API_URL,
    responseType: 'json',
  });

  const get = (
    page = 1,
    from = new Date(0),
    to = new Date(),
    text = 'Berlin'
  ) => {
    const fromValue = moment(from).format('X');
    const toValue = moment(to).format('X');
    const params = {
      page: page,
      per_page: PAGESIZE,
      occurred_after: fromValue,
      occurred_before: toValue,
      incident_type: CASETYPE,
      proximity: ADDRESS,
      proximity_square: SEARCHSQUARE,
      query: text,
    };

    console.log(params);

    return api.get('/api/v2/incidents', params);
  };

  const getById = (caseId) => {
    return api.get(`${caseId}`);
  };

  return {
    get,
    getById,
  };
}

export default create();
