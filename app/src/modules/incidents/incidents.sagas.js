import { all, put, takeLatest } from 'redux-saga/effects';
import api from '../../shared/services/api';

import { IncidentsTypes } from './incidents.redux';

export function* loadList(parameters) {
  try {
    const payload = yield api.get('incidents', { params: parameters });
    const { data } = payload;
    if (!data || payload.error) {
      // handle error
      yield put({ type: IncidentsTypes.REQUEST_BIKE_THEFTS_FAILURE, error: { error: true, data } });
    }
    yield put({ type: IncidentsTypes.REQUEST_BIKE_THEFTS_SUCCESS, payload: data.incidents });
  } catch (error) {
    yield put({ type: IncidentsTypes.REQUEST_BIKE_THEFTS_FAILURE, error: { error: true, data: error } });
  }
}

export function* loadBikeInfo({ id }) {
  try {
    const payload = yield api.get(`incidents/${id}`);
    const { data } = payload;
    if (!data && payload.error) {
      // handle error
      yield put({ type: IncidentsTypes.REQUEST_BIKE_INFO_FAILURE, error: data.error });
    }
    yield put({ type: IncidentsTypes.REQUEST_BIKE_INFO_SUCCESS, payload: data.incident });
  } catch (error) {
    yield put({ type: IncidentsTypes.REQUEST_BIKE_INFO_FAILURE, error: { error: true, data: error } });
  }
}

export function* watchIncidents() {
  yield all([
    takeLatest(IncidentsTypes.REQUEST_BIKE_THEFTS, loadList),
    takeLatest(IncidentsTypes.REQUEST_BIKE_INFO, loadBikeInfo),
  ]);
}
