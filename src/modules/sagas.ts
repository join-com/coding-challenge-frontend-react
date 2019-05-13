import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import axios from 'axios'

import Types from './types'
import { Filters, FetchDataActionType, Report } from './interfaces'
import { fetchDataSuccess, fetchDataError } from './actions'

interface ServerData {
  incidents: Report[]
}
interface ServerResponse {
  data: ServerData
}

// Register all your watchers
export const rootSaga = function* root() {
  yield all([
    fork(watchFetchData),
  ])
}

function* watchFetchData() {
  yield takeLatest(Types.FETCH_DATA, fetchData);
}
function sendRequest(params: Filters) {
  return axios.request<ServerData>({
    url: 'https://bikewise.org:443/api/v2/incidents?page=1&incident_type=theft&proximity=Berlin&proximity_square=100',
  })
}
function* fetchData(action: FetchDataActionType) {
  const response = yield call(sendRequest, action.params);
  console.log(response.data.incidents);
  yield put(fetchDataSuccess(response.data.incidents));

  // console.log(params);
}
