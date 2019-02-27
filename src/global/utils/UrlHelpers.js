import history from '../../config/route/history';

export function serializeQueryParams(params) {
  return params
    && Object.keys(params).filter(key => params[key] !== '' && params[key] !== undefined)
      .map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
}

export function getRouteParams(routerProps, paramName, type) {
  const param = routerProps && routerProps.match.params[paramName];
  return type === 'number' ? parseInt(param, 10) : param;
}

export function historyPush(pathname = '', params = {}, hash = '') {
  if (history) {
    const { location } = history;
    const newPathname = pathname || (location && location.pathname);
    const newHash = hash || (location && location.hash);
    const newQueryString = serializeQueryParams(params);
    const newHistoryUrl = `${newPathname}?${newQueryString}${newHash}`;
    const newHistoryState = { params, hash };
    history.push(newHistoryUrl, newHistoryState);
  }
}

const UrlHelpers = {
  serializeQueryParams,
  getRouteParams,
  historyPush,
};

export default UrlHelpers;
