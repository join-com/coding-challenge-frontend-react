import { takeEvery, call, put } from 'redux-saga/effects'
import { loadCases } from './ducks'
import { getIncidents } from './api'

function* loadCasesSaga() {
  const {
    data: { incidents },
  } = yield call(getIncidents)
  if (incidents) {
    yield put(loadCases.success({ cases: incidents }))
  }
  yield put(loadCases.failure())
}

function* theftCasesSaga() {
  yield takeEvery(loadCases.request.getType(), loadCasesSaga)
}

export { theftCasesSaga }
