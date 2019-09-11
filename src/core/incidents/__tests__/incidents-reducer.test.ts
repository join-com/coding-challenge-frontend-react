import { DEFAULT_INCIDENTS_PER_PAGE, DEFAULT_PROXIMITY, MAX_INCIDENTS_COUNT } from 'core/constants';
import { objKeysSnakeToCamel } from 'core/utils/snakeCase';
import { IIncident } from 'types';

import { IncidentsRequest, IncidentsRequestSuccess, IncidentsRequestFail } from '../actions';
import { incidents, incidentsInitialState } from '../reducer';
import { incidentsMaxPerPage } from '../__mocks__/incidentsMaxPerPage';
import { incidentsOnePageArray } from '../__mocks__/incidentsOnePageArray';
import { incidentsOnePageObject } from '../__mocks__/incidentsOnePageObject';

const options = {
    page: 1,
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
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        const stateAfter = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
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
            totalIncidents: 0,
            incidentsPerPage: 10,
        };

        // @ts-ignore convert from db snake case to camel
        const loadedIncidents: IIncident[] = objKeysSnakeToCamel(incidentsOnePageArray);
        const stateAfter = {
            incidents: incidentsOnePageObject,
            requesting: false,
            error: false,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        const action = new IncidentsRequestSuccess(loadedIncidents, options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle IncidentsRequestSuccess with max per page', () => {
        const options = {
            page: 1,
            perPage: MAX_INCIDENTS_COUNT,
            proximity: DEFAULT_PROXIMITY,
        };
        const stateBefore = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
        };

        // @ts-ignore convert from db snake case to camel
        const incidentsCamel: IIncident[] = objKeysSnakeToCamel(incidentsMaxPerPage);
        const stateAfter = {
            incidents: {},
            requesting: true,
            error: false,
            currentPage: 1,
            totalIncidents: 29,
            incidentsPerPage: 10,
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
            totalIncidents: 0,
            incidentsPerPage: 10,
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
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        const action = new IncidentsRequestFail(error);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });
});
