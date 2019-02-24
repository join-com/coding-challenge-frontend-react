import { all } from "redux-saga/effects";
import getAllIncidentsRequestSaga from './sagas/get_all_incidents.saga';
import countAllIncidentsRequestSaga from './sagas/count_all_incidents.saga';
import searchIncidentsByDateRangeRequestSaga from './sagas/search_incidents_by_date_range.saga';
import getIncidentByIdRequestSaga from './sagas/get_incident_by_id.saga';

export default function* rootSaga() {
  yield all([
    getAllIncidentsRequestSaga(),
    countAllIncidentsRequestSaga(),
    searchIncidentsByDateRangeRequestSaga(),
    getIncidentByIdRequestSaga()
  ]);
}