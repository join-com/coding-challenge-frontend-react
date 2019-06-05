import { takeLatest, put, call, all } from 'redux-saga/effects';
import { getTextService } from '../../shared/services/getTextService';
import { GET_TEXT_REQUEST } from './Home.actionTypes';
import { getTextSuccess, getTextFailure } from './Home.action';

export const getText = function*() {
  try {
    const data = yield call(getTextService);
    yield put(getTextSuccess(data));
  } catch (e) {
    yield put(getTextFailure(e));
  }
};

export const homeSaga = function*() {
  yield all([takeLatest(GET_TEXT_REQUEST, getText)]);
};
