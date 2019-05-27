import * as sinon from 'sinon';

import { actions } from './actions';
import { Actions as ActionNames, StateQueryFilter, StateQueryFilterDefault } from './types';
import API from '../../../resources';

import * as mocks from '../../../../mocks';


describe('AppListIncidents / actions', () => {

    it('doFetchIncidents / success', async () => {
        const spyDispatch = sinon.spy();

        // @ts-ignore
        API.incidents.fetchIncidents = (filter: StateQueryFilter) => Promise.resolve([mocks.incident, mocks.incident, mocks.incident]);

        await actions.doFetchIncidents(StateQueryFilterDefault)(spyDispatch);

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_CLEAR_ERROR,
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_BUSY_STATUS,
            payload: {
                isBusy: true,
            },
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_FILTER,
            payload: {
                filter: { page: 1, per_page: 10 },
            },
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_FETCH_INCIDENTS,
            payload: {},
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_FETCH_INCIDENTS,
            payload: { incidents: [mocks.incident, mocks.incident, mocks.incident] },
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_CLEAR_ERROR,
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_BUSY_STATUS,
            payload: {
                isBusy: false,
            },
        }))).toBeTruthy();

        expect(spyDispatch.callCount).toBe(7);
    });

    it('doFetchIncidents / failure', async () => {
        const spyDispatch = sinon.spy();

        // @ts-ignore
        API.incidents.fetchIncidents = (filter: StateQueryFilter) => Promise.reject({ name: 'qwerty' });

        await actions.doFetchIncidents(StateQueryFilterDefault)(spyDispatch);

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_CLEAR_ERROR,
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_BUSY_STATUS,
            payload: {
                isBusy: true,
            },
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_FILTER,
            payload: {
                filter: { page: 1, per_page: 10 },
            },
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_FETCH_INCIDENTS,
            payload: {},
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_ERROR,
            payload: {
                error: 'Oops, something went wrong...',
            },
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_BUSY_STATUS,
            payload: {
                isBusy: false,
            },
        }))).toBeTruthy();

        expect(spyDispatch.callCount).toBe(6);
    });

    it('doClearError', () => {
        const state = actions.doClearError();
        expect(state).toEqual({
            type: ActionNames.DO_CLEAR_ERROR,
        });
    });

    it('doSetError', () => {
        const state = actions.doSetError('Lorem Ipsum...');
        expect(state).toEqual({
            type: ActionNames.DO_SET_ERROR,
            payload: {
                error: 'Lorem Ipsum...',
            },
        });
    });

    it('doSetBusyStatus', () => {
        const state = actions.doSetBusyStatus(true);
        expect(state).toEqual({
            type: ActionNames.DO_SET_BUSY_STATUS,
            payload: {
                isBusy: true,
            },
        });
    });

    it('doSetFilter', () => {
        const state = actions.doSetFilter(StateQueryFilterDefault);
        expect(state).toEqual({
            type: ActionNames.DO_SET_FILTER,
            payload: {
                filter: StateQueryFilterDefault,
            },
        });
    });

    it('doPaginate', () => {
        const state = actions.doPaginate(123);
        expect(state).toEqual({
            type: ActionNames.DO_PAGINATE,
            payload: {
                page: 123,
            },
        });
    });

});
