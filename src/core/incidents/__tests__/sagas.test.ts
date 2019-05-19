import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { DEFAULT_INCIDENTS_PER_PAGE, DEFAULT_PROXIMITY } from 'core/constants';
import { api } from 'core/services/api';
import { objKeysCamelToSnake } from 'core/utils/camelCase';

import { IncidentsRequest, IncidentsRequestSuccess, IncidentsRequestFail } from '../actions';
import { incidents } from '../sagas';

const options = {
    perPage: DEFAULT_INCIDENTS_PER_PAGE,
    proximity: DEFAULT_PROXIMITY,
};
const action = new IncidentsRequest(options);

describe('incidents flow', () => {
    const generator = cloneableGenerator(incidents)(action);
    expect(generator.next().value).toEqual(call(api.get, 'incidents', objKeysCamelToSnake(options)));

    test('incidents success', () => {
        const clone = generator.clone();
        const response = { data: { incidents: [] }, status: 200 };
        expect(clone.next(response).value).toEqual(put(new IncidentsRequestSuccess([], options)));
        expect(clone.next().done).toEqual(true);
    });

    test('incidents fail', () => {
        const clone = generator.clone();
        const response = { data: null, status: 403 };
        expect(clone.next(response).value).toEqual(put(new IncidentsRequestFail(response)));
        expect(clone.next().done).toEqual(true);
    });
});
