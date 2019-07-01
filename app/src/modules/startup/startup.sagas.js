import { all, takeLatest } from 'redux-saga/effects';
import { StartupTypes } from './startup.redux';

export function* startup() {}

export function* watchStartup() {
  yield all([takeLatest(StartupTypes.STARTUP, startup)]);
}
