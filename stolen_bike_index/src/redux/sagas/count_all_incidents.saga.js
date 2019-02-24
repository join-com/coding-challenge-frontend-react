import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllIncidents } from "../../api/get_all_incidents";
import { COUNT_ALL_INCIDENTS_REQUEST } from "../constants/count_all_incidents.constants";
import { countAllIncidentsRequestSuccess, countAllIncidentsRequestFailure } from "../actions/count_all_incidents.actions";

function* countAllIncidentsSagaRequest() {
  const { status, data, message } = yield call(getAllIncidents);
  status === 200 ?
    yield put(countAllIncidentsRequestSuccess(data.incidents)) :
    yield put(countAllIncidentsRequestFailure(message));
}

export default function* countAllIncidentsRequestSaga() {
  yield takeEvery(COUNT_ALL_INCIDENTS_REQUEST, countAllIncidentsSagaRequest);
}