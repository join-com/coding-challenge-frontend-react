import { takeEvery, put, call } from 'redux-saga/effects';

import { api } from 'core/services/api';
import { DEFAULT_INCIDENTS_PER_PAGE, DEFAULT_PROXIMITY } from 'core/constants';
import { IIncident, IIncidentDatabase } from 'types';
import { objKeysCamelToSnake } from 'core/utils/camelCase';
import { objKeysSnakeToCamel } from 'core/utils/snakeCase';

import {
    ActionTypes,
    IncidentsRequest,
    IncidentsRequestFail,
    IncidentsRequestSuccess,
    ChangePage,
    ChangePageFail,
} from './actions';

export function* incidents({ options }: IncidentsRequest) {
    try {
        const result = yield call(api.get, 'incidents', objKeysCamelToSnake(options));

        const { status, data } = result;
        if (status !== 200) throw result;

        // @ts-ignore convert from db snake case to camel
        const incidents: IIncidentDatabase[] = objKeysSnakeToCamel(data.incidents);
        const transformed: IIncident[] = incidents.map(({ id, title, description, address, occurredAt, media }) => ({
            id,
            title,
            description,
            address,
            occurredAt,
            imageUrl: media && media.imageUrl,
            imageUrlThumb: media && media.imageUrlThumb,
        }));

        yield put(new IncidentsRequestSuccess(transformed, options));
    } catch (error) {
        yield put(new IncidentsRequestFail(error));
    }
}

export function* changePage({ options }: ChangePage) {
    try {
        const { from, to, totalPages } = options;

        if (from === to) {
            throw new Error(`Cannot change page to ${to} because page to is equal page from`);
        }

        if (to > totalPages || to < 1) {
            throw new Error(`Cannot change page to ${to} because value is out of range`);
        }

        yield put(
            new IncidentsRequest({
                page: to,
                perPage: DEFAULT_INCIDENTS_PER_PAGE,
                proximity: DEFAULT_PROXIMITY,
            }),
        );
    } catch (error) {
        yield put(new ChangePageFail(error));
    }
}

export default [takeEvery(ActionTypes.INCIDENTS_REQUEST, incidents)];
