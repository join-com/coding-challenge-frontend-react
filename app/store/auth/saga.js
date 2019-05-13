import { clearSubmitErrors, reset, startSubmit, stopSubmit } from 'redux-form';
import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  FORM_SUBMISSION_FAILED,
  SIGN_IN_FORM,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FORM,
  SIGN_UP_REQUEST,
} from './constants';
import { setSignInData } from './actions';

import { removeToken, setToken } from '../../utils/auth';
import { post } from '../../utils/request';

export function* submitSignUpRequest(action) {
  yield call(submitRequest, action, SIGN_UP_FORM, '/auth/signup', () => push('/signin'));
}

export function* submitSignInRequest(action) {
  yield call(submitRequest, action, SIGN_IN_FORM, '/auth/signin', (data) => setSignInData(data.user, data.token));
}

function* submitRequest(action, formId, uri, setData) {
  try {
    yield put(clearSubmitErrors(formId));
    yield put(startSubmit(formId));
    const authData = yield call(post, uri, action.data);

    if (authData.errors === undefined) {
      yield put(reset(formId));
      yield put(stopSubmit(formId));
      yield put(setData(authData.payload));
    } else {
      const errors = {};

      Object.keys(authData.errors).forEach((field) => {
        errors[field === '' ? '_error' : field] = action.intl.formatMessage(action.messages[authData.errors[field].code]);
      });

      yield put(stopSubmit(formId, errors));
    }
  } catch (err) {
    yield put(stopSubmit(formId, { _error: action.intl.formatMessage(action.messages[FORM_SUBMISSION_FAILED]) }));
  }
}

export function* signIn(action) {
  yield call(setToken, action.token);
  yield put(push('/features'));
}

export function* signOut() {
  yield call(removeToken);
  yield put(push('/'));
}

export default function* rootSaga() {
  yield takeLatest(SIGN_UP_REQUEST, submitSignUpRequest);
  yield takeLatest(SIGN_IN_REQUEST, submitSignInRequest);
  yield takeLatest(SIGN_IN_SUCCESS, signIn);
  yield takeLatest(SIGN_OUT, signOut);
}
