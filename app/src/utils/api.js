import apisauce from 'apisauce';
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

  const get = (page = 1, from = 0, to = Date.now(), text = 'Berlin') => {
    const fullQuery = `?page=${page}&
      per_page=${PAGESIZE}&
      occurred_before=${from}
      occurred_after=${to}&
      incident_type=${CASETYPE}&
      proximity=${ADDRESS}&
      proximity_square=${SEARCHSQUARE}&
      query=${text}`;

    console.log('fullQuery', fullQuery);

    return api.get(fullQuery);
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
