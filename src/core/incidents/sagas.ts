import { takeEvery, put, call } from 'redux-saga/effects';

import api from 'core/services/api';
import { ActionTypes, IncidentsRequest, IncidentsRequestFail, IncidentsRequestSuccess } from './actions';
import { objKeysCamelToSnake } from 'core/utils/camelCase';
import { Incident } from 'types';

function* incidents({ options }: IncidentsRequest) {
    try {
        const result = yield call(api.get, 'incidents', objKeysCamelToSnake(options));

        console.log('incidents saga result', result);

        const { status, data } = result;
        if (status !== 200) throw result;

        const { incidents } = data as { incidents: Incident[] };

        yield put(new IncidentsRequestSuccess(incidents, options));
    } catch (error) {
        yield put(new IncidentsRequestFail(error));
    }
}

export default [takeEvery(ActionTypes.INCIDENTS_REQUEST, incidents)];
