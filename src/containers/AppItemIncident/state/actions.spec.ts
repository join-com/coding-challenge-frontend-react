import * as sinon from 'sinon';

import { actions } from './actions';
import { Actions as ActionNames } from './types';
import API from '../../../resources';

import * as mocks from '../../../../mocks';


describe('AppItemIncident / actions', () => {

    it('doGetIncidentById / success', async () => {
        const spyDispatch = sinon.spy();
        const spyGetState = sinon.spy();

        API.incidents.getIncidentById = (id: number) => Promise.resolve(mocks.incident);

        await actions.doGetIncidentById(12345)(spyDispatch, spyGetState);

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_CLEAR_ERROR,
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_GET_INCIDENT_BY_ID,
            payload: {},
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_GET_INCIDENT_BY_ID,
            payload: {
                incident: mocks.incident,
            },
        }))).toBeTruthy();

        expect(spyDispatch.callCount).toBe(3);
    });

    it('doGetIncidentById / failure', async () => {
        const spyDispatch = sinon.spy();
        const spyGetState = sinon.spy();

        API.incidents.getIncidentById = (id: number) => Promise.reject({ response: { status: 404 } });

        await actions.doGetIncidentById(12345)(spyDispatch, spyGetState);

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_CLEAR_ERROR,
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_GET_INCIDENT_BY_ID,
            payload: {},
        }))).toBeTruthy();

        expect(spyDispatch.calledWith(sinon.match({
            type: ActionNames.DO_SET_ERROR,
            payload: {
                error: '404 / Incident Not Found',
            },
        }))).toBeTruthy();
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

});
