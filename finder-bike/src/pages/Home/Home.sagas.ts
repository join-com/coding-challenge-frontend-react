import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_INCIDENTS_REQUEST } from './Home.actionTypes';
import { getIncidentsSuccess, getIncidentsFailure } from './Home.action';
import { getIncidents } from '../../shared/services/getIncidents';

export const getIncidentsAction = function*(action) {
  try {
    const data = yield call(getIncidents, action.params);
    yield put(getIncidentsSuccess(data.incidents));
  } catch (e) {
    yield put(getIncidentsFailure(e));
  }
};

export const homeSaga = function*() {
  yield takeLatest(GET_INCIDENTS_REQUEST, getIncidentsAction);
};
