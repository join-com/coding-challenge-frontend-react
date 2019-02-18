export const convertToQueryParams = params => {
  if (!params) {
    return '';
  } else {
    return Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key] || '')}`)
      .join('&');
  }
};
