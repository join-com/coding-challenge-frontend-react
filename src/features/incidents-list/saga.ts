import {
  takeEvery, call, put, fork, all,
} from 'redux-saga/effects'
import { loadIncidents, loadFirstPage, loadSingleIncident } from './ducks'
import { getIncidents, getSingleIncident } from './api'

type NormalizeById = (incidents: Incidents) => NormalizedIncidents

const normalizeById: NormalizeById = incidents =>
  incidents.reduce((acc: NormalizedIncidents, current) => {
    const { id } = current
    acc[id] = current
    return acc
  }, {})

function* loadFirstPageSaga({ payload }: { payload: object }) {
  yield put(loadFirstPage.request())
  const {
    data: { incidents },
  } = yield call(getIncidents, { ...payload, perPage: 10 })
  if (incidents) {
    const normalized = normalizeById(incidents)
    yield put(loadFirstPage.success({ incidents: normalized }))
  }
  yield put(loadFirstPage.failure())
}

function* loadFullDataSaga({ payload }: { payload: object }) {
  const {
    data: { incidents },
  } = yield call(getIncidents, { ...payload })
  if (incidents) {
    const normalized = normalizeById(incidents)
    yield put(loadIncidents.success({ incidents: normalized }))
  }
  yield put(loadIncidents.failure())
}

function* loadIncidentsSaga({ payload }: { payload: object }) {
  yield all([
    fork(loadFirstPageSaga, { payload }),
    fork(loadFullDataSaga, { payload }),
  ])
}

function* loadSingleIncidentSaga({ payload }: { payload: { id: string } }) {
  const {
    data: { incident },
  } = yield call(getSingleIncident, { ...payload })

  if (incident) {
    const normalized = normalizeById([incident])
    yield put(loadSingleIncident.success({ incident: normalized }))
  }
  yield put(loadSingleIncident.failure())
}

function* theftIncidentsSaga() {
  yield takeEvery(loadIncidents.request, loadIncidentsSaga)
  yield takeEvery(loadSingleIncident.request, loadSingleIncidentSaga)
}

export { theftIncidentsSaga }
