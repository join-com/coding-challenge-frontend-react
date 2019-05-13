const TOKEN_FIELD_NAME = 'jwt_token';

/**
 * Save a token string in Local Storage
 *
 * @param {string} token
 */
export function setToken(token) {
  localStorage.setItem(TOKEN_FIELD_NAME, token);
}

/**
 * Remove a token from Local Storage
 *
 */
export function removeToken() {
  localStorage.removeItem(TOKEN_FIELD_NAME);
}

/**
 * Get a token value
 *
 * @returns {string}
 */
export function getToken() {
  return localStorage.getItem(TOKEN_FIELD_NAME);
}

/**
 * Check if a token is saved in Local Storage
 *
 * @returns {boolean}
 */
export function isTokenSet() {
  return getToken() !== null;
}
