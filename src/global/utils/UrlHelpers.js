export function serializeQueryParams(params) {
  return params
    && Object.keys(params).filter(key => params[key] !== '' && params[key] !== undefined)
      .map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
}

const UrlHelpers = {
  serializeQueryParams,
};

export default UrlHelpers;
