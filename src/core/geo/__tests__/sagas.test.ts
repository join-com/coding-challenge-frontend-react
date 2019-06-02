import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { DEFAULT_INCIDENTS_PER_PAGE, DEFAULT_PROXIMITY } from 'core/constants';
import { api } from 'core/services/api';
import { objKeysCamelToSnake } from 'core/utils/camelCase';

import { GeoRequest, GeoRequestSuccess, GeoRequestFail } from '../actions';
import { geos } from '../sagas';
import { geoMock } from '../__mocks__/geo';
import { objKeysSnakeToCamel } from 'core/utils/snakeCase';
import { IGeo } from 'types';

const options = {
    perPage: DEFAULT_INCIDENTS_PER_PAGE,
    proximity: DEFAULT_PROXIMITY,
};
const action = new GeoRequest(options);

describe('locations flow', () => {
    const generator = cloneableGenerator(geos)(action);
    expect(generator.next().value).toEqual(call(api.get, 'locations', objKeysCamelToSnake(options)));

    test('locations success', () => {
        const clone = generator.clone();
        const response = { data: geoMock, status: 200 };
        expect(clone.next(response).value).toEqual(
            put(new GeoRequestSuccess(objKeysSnakeToCamel(geoMock) as IGeo, options)),
        );
        expect(clone.next().done).toEqual(true);
    });

    test('locations fail', () => {
        const clone = generator.clone();
        const response = { data: null, status: 403 };
        expect(clone.next(response).value).toEqual(put(new GeoRequestFail(response)));
        expect(clone.next().done).toEqual(true);
    });
});
