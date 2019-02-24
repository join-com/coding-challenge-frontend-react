import { call, put, takeEvery } from 'redux-saga/effects';
import { getIncidentsWithPagination } from "../../api/get_incidents_with_pagination";
import { GET_ALL_INCIDENTS_REQUEST } from "../constants/get_all_incidents.constants";
import { getAllIncidentsRequestSuccess, getAllIncidentsRequestFailure } from "../actions/get_all_incidents.actions";

function* getAllIncidentsSagaRequest({ page }) {
  const { status, data } = yield call(getIncidentsWithPagination, page);
  status === 200 ?
    yield put(getAllIncidentsRequestSuccess(data.incidents)) :
    yield put(getAllIncidentsRequestFailure('Ooops, something went wrong ...'));
}

export default function* getAllIncidentsRequestSaga() {
  yield takeEvery(GET_ALL_INCIDENTS_REQUEST, getAllIncidentsSagaRequest);
}