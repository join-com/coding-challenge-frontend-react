import { takeEvery, call, put } from 'redux-saga/effects'
import { loadIncidents } from './ducks'
import { getIncidents } from './api'

type NormalizeById = (incidents: Incidents) => NormalizedIncidents

const normalizeById: NormalizeById = incidents =>
  incidents.reduce((acc, current) => {
    const { id } = current
    // @ts-ignore
    acc[id] = current
    return acc
  }, {})

function* loadIncidentsSaga() {
  const {
    data: { incidents },
  } = yield call(getIncidents)
  if (incidents) {
    const normalized = normalizeById(incidents)
    yield put(loadIncidents.success({ incidents: normalized }))
  }
  yield put(loadIncidents.failure())
}

function* theftIncidentsSaga() {
  yield takeEvery(loadIncidents.request.getType(), loadIncidentsSaga)
}

export { theftIncidentsSaga }
