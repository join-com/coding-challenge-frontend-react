import { all } from 'redux-saga/effects'
import { theftIncidentsSaga } from '@/features/incidents-list/saga'

function* rootSaga() {
  yield all([theftIncidentsSaga()])
}

export { rootSaga }
