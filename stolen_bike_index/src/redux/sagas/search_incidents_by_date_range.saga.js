import { call, put, takeEvery } from 'redux-saga/effects';
import { searchIncidentsByDateRange } from "../../api/search_incidents_by_date_range";
import { SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST } from "../constants/search_incidents_by_date_range.constants";
import { searchIncidentsByDateRangeRequestSuccess, searchIncidentsByDateRangeRequestFailure } from "../actions/search_incidents_by_date_range.actions";

function* searchIncidentsByDateRangeSagaRequest({ occurred_after, occurred_before }) {
  const { status, data } = yield call(searchIncidentsByDateRange, occurred_after, occurred_before);
  status === 200 ?
    yield put(searchIncidentsByDateRangeRequestSuccess(data.incidents)) :
    yield put(searchIncidentsByDateRangeRequestFailure('Ooops, something went wrong ...'));
}

export default function* searchIncidentsByDateRangeRequestSaga() {
  yield takeEvery(SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST, searchIncidentsByDateRangeSagaRequest);
}