import { DEFAULT_PROXIMITY } from 'core/constants';
import { IGeo } from 'types';

import { GeoRequest, GeoRequestSuccess, GeoRequestFail } from '../../geo/actions';
import { incidents, IIncidentsObj } from '../reducer';
import { incidentsOnePageObject } from '../__mocks__/incidentsOnePageObject';
import { geoMock, incidentsOnePageObjectWithGeo } from 'core/geo/__mocks__/geo';

const options = {
    proximity: DEFAULT_PROXIMITY,
    occurredAfter: 1532152800,
    occurredBefore: 1532152800,
};

describe('incidents reducer', () => {
    it('should handle GeoRequest', () => {
        const stateBefore = {
            // @ts-ignore
            incidents: incidentsOnePageObject as IIncidentsObj,
            requesting: false,
            error: false,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        const stateAfter = {
            // @ts-ignore
            incidents: incidentsOnePageObject as IIncidentsObj,
            requesting: false,
            error: false,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        const action = new GeoRequest(options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle GeoRequestSuccess', () => {
        const stateBefore = {
            // @ts-ignore
            incidents: incidentsOnePageObject as IIncidentsObj,
            requesting: false,
            error: false,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        const stateAfter = {
            incidents: incidentsOnePageObjectWithGeo,
            requesting: false,
            error: false,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        // @ts-ignore
        const action = new GeoRequestSuccess(geoMock as IGeo, options);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });

    it('should handle GeoRequestFail', () => {
        const stateBefore = {
            // @ts-ignore
            incidents: incidentsOnePageObject as IIncidentsObj,
            requesting: false,
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
            // @ts-ignore
            incidents: incidentsOnePageObject as IIncidentsObj,
            requesting: false,
            error,
            currentPage: 1,
            totalIncidents: 0,
            incidentsPerPage: 10,
        };
        const action = new GeoRequestFail(error);
        expect(incidents(stateBefore, action)).toEqual(stateAfter);
    });
});
