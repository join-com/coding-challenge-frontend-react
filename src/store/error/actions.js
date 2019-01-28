export const SET_ERROR = 'SET_ERROR';
export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}

export const CLEAR_ERROR = 'CLEAR_ERROR';
export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}
