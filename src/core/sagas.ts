import { all } from 'redux-saga/effects';

import incidents from './incidents/sagas';
import geo from './geo/sagas';

export function* sagas() {
    yield all([incidents, geo].reduce((allSagas, sagas) => allSagas.concat(sagas), []));
}
