import { call, takeLatest } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { push } from 'react-router-redux';
import { clearSubmitErrors, reset, startSubmit, stopSubmit } from 'redux-form';

import { removeToken, setToken } from '../../utils/auth';
import { post } from '../../utils/request';

import { setSignInData } from './actions';
import {
  FORM_SUBMISSION_FAILED,
  INVALID_PASSWORD,
  SIGN_IN_FORM,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FORM,
  SIGN_UP_REQUEST,
} from './constants';
import generateRootSaga, { signIn, signOut, submitSignInRequest, submitSignUpRequest } from './saga';

/* eslint-disable redux-saga/yield-effects */
describe('auth Saga', () => {
  describe('#signIn', () => {
    it('sets the token and redirects to the features page', () => {
      const token = 'Auth token';

      return expectSaga(signIn, { token })
        .call(setToken, token)
        .put(push('/features'))
        .run();
    });
  });

  describe('#signOut', () => {
    it('resets the token and redirects to the home page', () => expectSaga(signOut)
      .call(removeToken)
      .put(push('/'))
      .run()
    );
  });

  describe('submit requests', () => {
    const intl = { formatMessage: (message) => message };
    const UNKNOWN_ERROR = 'UNKNOWN_ERROR';
    const messages = { FORM_SUBMISSION_FAILED, INVALID_PASSWORD, UNKNOWN_ERROR };

    describe('#submitSignInRequest', () => {
      const DUMMY_REQUEST_DATA = {
        email: 'user@mail.com',
        password: 'The password',
      };

      it('loads sign in data', () => {
        const DUMMY_RESPONSE = {
          payload: {
            token: 'Auth token',
            user: 'User',
          },
        };

        return expectSaga(submitSignInRequest, { data: DUMMY_REQUEST_DATA })
          .provide([
            [call(post, '/auth/signin', DUMMY_REQUEST_DATA), DUMMY_RESPONSE],
          ])
          .put(clearSubmitErrors(SIGN_IN_FORM))
          .put(startSubmit(SIGN_IN_FORM))
          .put(stopSubmit(SIGN_IN_FORM))
          .put(reset(SIGN_IN_FORM))
          .put(setSignInData(DUMMY_RESPONSE.payload.user, DUMMY_RESPONSE.payload.token))
          .run();
      });

      it('handles server-side errors', () => {
        const errors = {
          '': { code: UNKNOWN_ERROR },
          password: { code: INVALID_PASSWORD },
        };
        const ERROR_RESPONSE = { errors };

        return expectSaga(submitSignInRequest, { data: DUMMY_REQUEST_DATA, intl, messages })
          .provide([
            [call(post, '/auth/signin', DUMMY_REQUEST_DATA), ERROR_RESPONSE],
          ])
          .put(clearSubmitErrors(SIGN_IN_FORM))
          .put(startSubmit(SIGN_IN_FORM))
          .put(stopSubmit(SIGN_IN_FORM, { password: INVALID_PASSWORD, _error: UNKNOWN_ERROR }))
          .run();
      });

      it('handles runtime errors', () => {
        const error = new Error('error');

        return expectSaga(submitSignInRequest, { data: DUMMY_REQUEST_DATA, intl, messages })
          .provide([
            [matchers.call.fn(post), throwError(error)],
          ])
          .put(clearSubmitErrors(SIGN_IN_FORM))
          .put(startSubmit(SIGN_IN_FORM))
          .put(stopSubmit(SIGN_IN_FORM, { _error: FORM_SUBMISSION_FAILED }))
          .run();
      });
    });

    describe('#submitSignUpRequest', () => {
      const DUMMY_REQUEST_DATA = {
        email: 'user@mail.com',
        name: 'User Name',
        password: 'The password',
      };

      it('loads sign up data', () => expectSaga(submitSignUpRequest, { data: DUMMY_REQUEST_DATA })
          .provide([
            [call(post, '/auth/signup', DUMMY_REQUEST_DATA), {}],
          ])
          .put(clearSubmitErrors(SIGN_UP_FORM))
          .put(startSubmit(SIGN_UP_FORM))
          .put(stopSubmit(SIGN_UP_FORM))
          .put(reset(SIGN_UP_FORM))
          .put(push('/signin'))
          .run()
      );
    });
  });

  describe('root saga', () => {
    it('delegates control to the inner sagas', () => {
      const rootSaga = generateRootSaga();
      expect(rootSaga.next().value).toEqual(takeLatest(SIGN_UP_REQUEST, submitSignUpRequest));
      expect(rootSaga.next().value).toEqual(takeLatest(SIGN_IN_REQUEST, submitSignInRequest));
      expect(rootSaga.next().value).toEqual(takeLatest(SIGN_IN_SUCCESS, signIn));
      expect(rootSaga.next().value).toEqual(takeLatest(SIGN_OUT, signOut));
    });
  });
});
