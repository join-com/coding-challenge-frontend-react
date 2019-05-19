import { DEFAULT_INCIDENTS_PER_PAGE, DEFAULT_PROXIMITY, MAX_INCIDENTS_COUNT } from 'core/constants';
import { objKeysSnakeToCamel } from 'core/utils/snakeCase';
import { Incident } from 'types';

import { IncidentsRequest, IncidentsRequestSuccess, IncidentsRequestFail } from '../actions';
import { incidents, incidentsInitialState } from '../reducer';
import { incidentsMaxPerPage } from '../__mocks__/incidentsMaxPerPage';
import { incidentsOnePageArray } from '../__mocks__/incidentsOnePageArray';
import { incidentsOnePageObject } from '../__mocks__/incidentsOnePageObject';

const options = {
    perPage: DEFAULT_INCIDENTS_PER_PAGE,
    proximity: DEFAULT_PROXIMITY,
};

describe('incidents reducer', () => {
    it('should return the initial state', () => {
        // @ts-ignore
        expect(incidents(undefined, {})).toEqual(incidentsInitialState);
    });

    it('should handle IncidentsRequest', () => {
        const stateBefore = {
            incidents: {},
            requesting: false,
            error: false,
            currentPage: 1,
        };
        const stateAfter = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
        };
        const action = new IncidentsRequest(options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle IncidentsRequestSuccess', () => {
        const stateBefore = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
        };

        // @ts-ignore convert from db snake case to camel
        const loadedIncidents: Incident[] = objKeysSnakeToCamel(incidentsOnePageArray);
        const stateAfter = {
            incidents: incidentsOnePageObject,
            requesting: false,
            error: false,
            currentPage: 1,
        };
        const action = new IncidentsRequestSuccess(loadedIncidents, options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle IncidentsRequestSuccess with max per page', () => {
        const options = {
            perPage: MAX_INCIDENTS_COUNT,
            proximity: DEFAULT_PROXIMITY,
        };
        const stateBefore = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
        };

        // @ts-ignore convert from db snake case to camel
        const incidentsCamel: Incident[] = objKeysSnakeToCamel(incidentsMaxPerPage);
        const stateAfter = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
            totalPages: 29,
        };
        const action = new IncidentsRequestSuccess(incidentsCamel, options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle IncidentsRequestFail', () => {
        const stateBefore = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
        };
        const error = {
            status: 403,
            data: null,
        };
        const stateAfter = {
            incidents: {},
            requesting: false,
            error,
            currentPage: 1,
        };
        const action = new IncidentsRequestFail(error);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });
});
