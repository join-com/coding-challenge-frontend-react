import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import { DEFAULT_INCIDENTS_PER_PAGE, DEFAULT_PROXIMITY, MAX_INCIDENTS_COUNT } from 'core/constants';
import { api } from 'core/services/api';
import { objKeysCamelToSnake } from 'core/utils/camelCase';

import {
    IncidentsRequest,
    IncidentsRequestSuccess,
    IncidentsRequestFail,
    ChangePage,
    ChangePageFail,
    SearchRequest,
} from '../actions';
import { incidents, changePage, search } from '../sagas';
import { ISearchRequestOptions, IIncidentRequestOptions } from 'types';

describe('incidents flow', () => {
    const options = {
        page: 1,
        perPage: DEFAULT_INCIDENTS_PER_PAGE,
        proximity: DEFAULT_PROXIMITY,
    };
    const action = new IncidentsRequest(options);
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

describe('changePage flow', () => {
    test('changePage success', () => {
        const options = {
            from: 1,
            to: 2,
            totalPages: 29,
        };
        const action = new ChangePage(options);
        const generator = cloneableGenerator(changePage)(action);
        const clone = generator.clone();

        expect(clone.next().value).toEqual(
            put(
                new IncidentsRequest({
                    page: 2,
                    perPage: DEFAULT_INCIDENTS_PER_PAGE,
                    proximity: DEFAULT_PROXIMITY,
                }),
            ),
        );
        expect(clone.next().done).toEqual(true);
    });

    test('changePage fail, from to are equal', () => {
        const options = {
            from: 1,
            to: 1,
            totalPages: 29,
        };
        const action = new ChangePage(options);
        const generator = cloneableGenerator(changePage)(action);
        const clone = generator.clone();

        expect(clone.next().value).toEqual(
            put(new ChangePageFail(new Error('Cannot change page to 1 because page to is equal page from'))),
        );
        expect(clone.next().done).toEqual(true);
    });

    test('changePage fail, page to is negative', () => {
        const options = {
            from: 1,
            to: -1,
            totalPages: 29,
        };
        const action = new ChangePage(options);
        const generator = cloneableGenerator(changePage)(action);
        const clone = generator.clone();

        expect(clone.next().value).toEqual(
            put(new ChangePageFail(new Error('Cannot change page to -1 because value is out of range'))),
        );
        expect(clone.next().done).toEqual(true);
    });

    test('changePage fail, page to equal zero', () => {
        const options = {
            from: 1,
            to: 0,
            totalPages: 29,
        };
        const action = new ChangePage(options);
        const generator = cloneableGenerator(changePage)(action);
        const clone = generator.clone();

        expect(clone.next().value).toEqual(
            put(new ChangePageFail(new Error('Cannot change page to 0 because value is out of range'))),
        );
        expect(clone.next().done).toEqual(true);
    });

    test('changePage fail, page to more than total pages', () => {
        const options = {
            from: 1,
            to: 30,
            totalPages: 29,
        };
        const action = new ChangePage(options);

        const generator = cloneableGenerator(changePage)(action);

        const clone = generator.clone();
        expect(clone.next().value).toEqual(
            put(new ChangePageFail(new Error('Cannot change page to 30 because value is out of range'))),
        );
        expect(clone.next().done).toEqual(true);
    });
});

describe('search flow', () => {
    const incidentsRequestOptions: IIncidentRequestOptions = {
        page: 1,
        perPage: DEFAULT_INCIDENTS_PER_PAGE,
        proximity: DEFAULT_PROXIMITY,
    };

    test('empty search request', () => {
        const options: ISearchRequestOptions = {
            query: undefined,
            from: null,
            to: null,
        };
        const action = new SearchRequest(options);
        const generator = cloneableGenerator(search)(action);
        const clone = generator.clone();

        expect(clone.next().value).toEqual(
            put(
                new IncidentsRequest({
                    ...incidentsRequestOptions,
                }),
            ),
        );
        expect(clone.next().value).toEqual(
            put(
                new IncidentsRequest({
                    ...incidentsRequestOptions,
                    perPage: MAX_INCIDENTS_COUNT,
                }),
            ),
        );
        expect(clone.next().done).toEqual(true);
    });

    test('search request with from date', () => {
        const options: ISearchRequestOptions = {
            query: undefined,
            from: new Date(1559665299160),
            to: null,
        };
        const action = new SearchRequest(options);
        const generator = cloneableGenerator(search)(action);
        const clone = generator.clone();

        expect(clone.next().value).toEqual(
            put(
                new IncidentsRequest({
                    ...incidentsRequestOptions,
                    occurredAfter: 1559665299,
                }),
            ),
        );
        expect(clone.next().value).toEqual(
            put(
                new IncidentsRequest({
                    ...incidentsRequestOptions,
                    perPage: MAX_INCIDENTS_COUNT,
                    occurredAfter: 1559665299,
                }),
            ),
        );
        expect(clone.next().done).toEqual(true);
    });

    test('search request with full query', () => {
        const options: ISearchRequestOptions = {
            query: 'black',
            from: new Date(1559660299160),
            to: new Date(1559665299160),
        };
        const action = new SearchRequest(options);
        const generator = cloneableGenerator(search)(action);
        const clone = generator.clone();

        expect(clone.next().value).toEqual(
            put(
                new IncidentsRequest({
                    ...incidentsRequestOptions,
                    query: 'black',
                    occurredAfter: 1559660299,
                    occurredBefore: 1559665299,
                }),
            ),
        );
        expect(clone.next().value).toEqual(
            put(
                new IncidentsRequest({
                    ...incidentsRequestOptions,
                    query: 'black',
                    perPage: MAX_INCIDENTS_COUNT,
                    occurredAfter: 1559660299,
                    occurredBefore: 1559665299,
                }),
            ),
        );
        expect(clone.next().done).toEqual(true);
    });
});
