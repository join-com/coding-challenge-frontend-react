import { takeEvery, put, call } from 'redux-saga/effects';

import { api } from 'core/services/api';
import { objKeysCamelToSnake } from 'core/utils/camelCase';
import { Incident } from 'types';

import { ActionTypes, IncidentsRequest, IncidentsRequestFail, IncidentsRequestSuccess } from './actions';
import { objKeysSnakeToCamel } from 'core/utils/snakeCase';

export function* incidents({ options }: IncidentsRequest) {
    try {
        const result = yield call(api.get, 'incidents', objKeysCamelToSnake(options));

        const { status, data } = result;
        if (status !== 200) throw result;

        // @ts-ignore convert from db snake case to camel
        const incidents: Incident[] = objKeysSnakeToCamel(data.incidents);

        yield put(new IncidentsRequestSuccess(incidents, options));
    } catch (error) {
        yield put(new IncidentsRequestFail(error));
    }
}

export default [takeEvery(ActionTypes.INCIDENTS_REQUEST, incidents)];
