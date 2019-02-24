import { call, put, takeEvery } from 'redux-saga/effects';
import { getIncidentById } from "../../api/get_incident_by_id";
import { getIncidentLocation } from "../../api/get_incident_location";
import { GET_INCIDENT_BY_ID_REQUEST } from "../constants/get_incident_by_id.constants";
import { getIncidentByIdRequestSuccess, getIncidentByIdRequestFailure } from "../actions/get_incident_by_id.actions";

function* getIncidentByIdSagaRequest({ id }) {
  const { status, data } = yield call(getIncidentById, id);
  if(status === 200) {
    const locations = yield call(getIncidentLocation);
    locations.data.features.forEach(item => {
      if(item.properties.id === data.incident.id) {
        data.incident = { ...data.incident, coordinates: item.geometry.coordinates }
      }
    });
    yield put(getIncidentByIdRequestSuccess(data.incident))
  } else {
    yield put(getIncidentByIdRequestFailure('Ooops, something went wrong ...'));
  }
}

export default function* getIncidentByIdRequestSaga() {
  yield takeEvery(GET_INCIDENT_BY_ID_REQUEST, getIncidentByIdSagaRequest);
}