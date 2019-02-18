import { convertToQueryParams } from '../utils/url';

const baseURL = 'https://bikewise.org/api/v2';
const defaults = {
  incident_type: 'theft',
  proximity: 'berlin',
  proximity_square: 100
};

export const incidents = async params => {
  params = { ...params, ...defaults };
  const response = await fetch(
    `${baseURL}/incidents?${convertToQueryParams(params)}`
  );
  const body = await response.json();
  return body;
};

export const markers = async params => {
  params = { ...params, ...defaults };
  const response = await fetch(
    `${baseURL}/locations/markers?${convertToQueryParams(params)}`
  );
  const body = await response.json();
  return body;
};
