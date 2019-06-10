import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_INCIDENT_DETAIL_REQUEST } from './IncidentDetail.actionTypes';
import {
  getIncidentDetailSuccess,
  getIncidentDetailFailure
} from './IncidentDetail.action';
import { getIncident } from '../../shared/services/getIncident';
import { getLocation } from '../../shared/services/getLocation';

export const getIncidentAction = function*(action) {
  try {
    const { incident } = yield call(getIncident, action.id);
    const locations = yield call(getLocation, {
      occurredAfter: incident.occurred_at,
      occurredBefore: incident.occurred_at,
      proximity: 'Berlin',
      roximity_square: 30
    });

    const featureWithId = locations.features.find(
      elm => elm.properties.id === incident.id
    );
    const geometry = featureWithId.geometry;

    yield put(getIncidentDetailSuccess({ ...incident, geometry }));
  } catch (e) {
    yield put(getIncidentDetailFailure(e));
  }
};

export const incidentDetailSaga = function*() {
  yield takeLatest(GET_INCIDENT_DETAIL_REQUEST, getIncidentAction);
};
