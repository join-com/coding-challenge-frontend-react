import {
  SET_LOADING,
  RESET_LOADING,
} from './constants';

export function resetLoading() {
  return {
    type: RESET_LOADING,
  };
}

export function setLoading() {
  return {
    type: SET_LOADING,
  };
}
