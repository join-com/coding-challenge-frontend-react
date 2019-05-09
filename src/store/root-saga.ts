import { all } from 'redux-saga/effects'
import { theftCasesSaga } from '@/features/case-list/saga'

function* rootSaga() {
  yield all([theftCasesSaga()])
}

export { rootSaga }
