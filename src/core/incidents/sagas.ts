import { takeEvery, put, call } from 'redux-saga/effects';

import { api } from 'core/services/api';
import { DEFAULT_INCIDENTS_PER_PAGE, DEFAULT_PROXIMITY, MAX_INCIDENTS_COUNT } from 'core/constants';
import { IIncident, IIncidentDatabase, IIncidentRequestOptions } from 'types';
import { objKeysCamelToSnake } from 'core/utils/camelCase';
import { objKeysSnakeToCamel } from 'core/utils/snakeCase';

import {
    ActionTypes,
    IncidentsRequest,
    IncidentsRequestFail,
    IncidentsRequestSuccess,
    ChangePage,
    ChangePageFail,
    SearchRequest,
    SearchRequestFail,
} from './actions';
import { convertToUnixTimestamp } from 'core/utils/unixTimestamp';

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

        if (!totalPages) {
            throw new Error(`Cannot change page to ${to} because total pages is ${totalPages}`);
        }

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

export function* search({ options }: SearchRequest) {
    try {
        const { query, from, to } = options;

        let incidentsRequestOptions: IIncidentRequestOptions = {
            page: 1,
            perPage: DEFAULT_INCIDENTS_PER_PAGE,
            proximity: DEFAULT_PROXIMITY,
        };

        if (query) {
            incidentsRequestOptions = {
                ...incidentsRequestOptions,
                query,
            };
        }

        if (to) {
            incidentsRequestOptions = {
                ...incidentsRequestOptions,
                occurredBefore: convertToUnixTimestamp(to.valueOf()),
            };
        }

        if (from) {
            incidentsRequestOptions = {
                ...incidentsRequestOptions,
                occurredAfter: convertToUnixTimestamp(from.valueOf()),
            };
        }

        yield put(new IncidentsRequest(incidentsRequestOptions));
        yield put(new IncidentsRequest({ ...incidentsRequestOptions, perPage: MAX_INCIDENTS_COUNT }));
    } catch (error) {
        yield put(new SearchRequestFail(error));
    }
}

export default [
    takeEvery(ActionTypes.INCIDENTS_REQUEST, incidents),
    takeEvery(ActionTypes.CHANGE_PAGE, changePage),
    takeEvery(ActionTypes.SEARCH_REQUEST, search),
];
