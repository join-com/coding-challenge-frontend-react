import { all } from 'redux-saga/effects';
import incidents from './incidents/sagas';

export function* sagas() {
    yield all([incidents].reduce((allSagas, sagas) => allSagas.concat(sagas), []));
}
