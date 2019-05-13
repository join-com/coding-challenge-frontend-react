import { apiBaseUrl as BASE_URL } from '../../env';
import { submitRequest, extractJson } from './base';

const getSerializedPayload = (payload) => Object.keys(payload).map((field) => `${field}=${payload[field]}`).join('&');

const getRaw = (path, data, rootUrl) => (
  submitRequest(rootUrl + path + (Object.keys(data).length > 0 ? `?${getSerializedPayload(data)}` : ''), 'GET', true)
);

const postRaw = (path, payload, rootUrl) => submitRequest(rootUrl + path, 'POST', true, payload);
const putRaw = (path, payload, rootUrl) => submitRequest(rootUrl + path, 'PUT', true, payload);
const removeRaw = (path, payload, rootUrl) => submitRequest(rootUrl + path, 'DELETE', false, payload);

export const get = (path, payload, rootUrl = BASE_URL) => extractJson(getRaw(path, payload, rootUrl));
export const post = (path, payload, rootUrl = BASE_URL) => extractJson(postRaw(path, payload, rootUrl));
export const put = (path, payload, rootUrl = BASE_URL) => extractJson(putRaw(path, payload, rootUrl));
export const remove = (path, payload, rootUrl = BASE_URL) => extractJson(removeRaw(path, payload, rootUrl));
