/**
 * Generic function for error reporting.
 * Use it in all sagas, so you can later send errors to Sentry.
 * @param error
 * @returns {null}
 */
export default error => {
  console.error(error); //eslint-disable-line
  return null;
};
