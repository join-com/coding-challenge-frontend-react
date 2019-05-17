import { all } from 'redux-saga/effects';

export function* sagas() {
    yield all([].reduce((allSagas, sagas) => allSagas.concat(sagas), []));
}
