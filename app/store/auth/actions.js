import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_REQUEST,
} from './constants';

export function submitSignInRequest(data, intl, messages) {
  return {
    type: SIGN_IN_REQUEST,
    data,
    intl,
    messages,
  };
}

export function setSignInData(user, token) {
  return {
    type: SIGN_IN_SUCCESS,
    user,
    token,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function submitSignUpRequest(data, intl, messages) {
  return {
    type: SIGN_UP_REQUEST,
    data,
    intl,
    messages,
  };
}
