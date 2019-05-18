import { takeEvery, put, call } from 'redux-saga/effects';

import api from 'core/services/api';
import { objKeysCamelToSnake } from 'core/utils/camelCase';
import { Geo } from 'types';

import { ActionTypes, GeoRequest, GeoRequestFail, GeoRequestSuccess } from './actions';

function* geos({ options }: GeoRequest) {
    try {
        const result = yield call(api.get, 'locations', objKeysCamelToSnake(options));

        console.log('geos saga result', result);

        const { status, data } = result;
        if (status !== 200) throw result;

        yield put(new GeoRequestSuccess(data as Geo, options));
    } catch (error) {
        yield put(new GeoRequestFail(error));
    }
}

export default [takeEvery(ActionTypes.GEO_REQUEST, geos)];
