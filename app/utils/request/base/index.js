import 'whatwg-fetch';

import { apiBaseUrl } from '../../../env';
import { isTokenSet, getToken } from '../../auth';

function getRequestParams(method, useJsonHeaders, data, tokenUsed) {
  const params = { method };

  if (useJsonHeaders) {
    params.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  } else {
    params.headers = {};
  }

  if (tokenUsed && isTokenSet()) {
    params.headers.Authorization = `Bearer ${getToken()}`;
  }

  if (data !== undefined) {
    params.body = JSON.stringify(data);
  }

  return params;
}

export function submitRequest(url, method, useJsonHeaders, data) {
  return fetch(url, getRequestParams(method, useJsonHeaders, data, url.indexOf(apiBaseUrl) === 0)).then(
    (res) => res,
    () => ({ statusText: '404 (Not Found)' })
  );
}

export function extractJson(request) {
  return new Promise((resolve, reject) => request.then(
    (response) => response.ok ? resolve(response.json()) : reject(new Error(response.statusText))
  ));
}
