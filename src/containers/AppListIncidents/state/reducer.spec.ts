import * as sinon from 'sinon';

import * as _ from 'lodash';

import { reducer } from './reducer';
import { Actions as ActionNames, StateQueryFilterDefault } from './types';

import * as mocks from '../../../../mocks';


describe('AppListIncidents / reducers', () => {

    it('no-op', () => {
        let state = reducer();
        expect(state).toEqual({ isBusy: false });
    });

    it('no-op due to unexisting action type', () => {
        let dummy = { incidents: [], filter: StateQueryFilterDefault, isBusy: false };
        let state = _.cloneDeep(dummy);
        state = reducer(state, {
            type: '_',
            payload: { incidents: [mocks.incident, mocks.incident, mocks.incident], isBusy: true },
        });
        expect(state).toEqual(dummy);
    });

    it('DO_FETCH_INCIDENTS', () => {
        let state = { incidents: [] };
        state = reducer(state, {
            type: ActionNames.DO_FETCH_INCIDENTS,
            payload: { incidents: [mocks.incident, mocks.incident, mocks.incident] },
        });
        expect(state).toEqual({ incidents: [mocks.incident, mocks.incident, mocks.incident] });
    });

    it('DO_CLEAR_ERROR', () => {
        let state = { error: 'qwerty' };
        state = reducer(state, {
            type: ActionNames.DO_CLEAR_ERROR,
        });
        expect(state).toEqual({ error: undefined });
    });

    it('DO_SET_ERROR', () => {
        let state = { error: 'qwerty' };
        state = reducer(state, {
            type: ActionNames.DO_SET_ERROR,
            payload: { error: 'Lorem ipsum dolor sit amet...' },
        });
        expect(state).toEqual({ error: 'Lorem ipsum dolor sit amet...' });
    });

    it('DO_SET_BUSY_STATUS', () => {
        let state = { isBusy: false };
        state = reducer(state, {
            type: ActionNames.DO_SET_BUSY_STATUS,
            payload: { isBusy: true },
        });
        expect(state).toEqual({ isBusy: true });
    });

    it('DO_SET_FILTER', () => {
        let state = { };
        state = reducer(state, {
            type: ActionNames.DO_SET_FILTER,
            payload: { filter: StateQueryFilterDefault },
        });
        expect(state).toEqual({ filter: StateQueryFilterDefault });
    });

    it('DO_PAGINATE', () => {
        let state = { filter: StateQueryFilterDefault };
        state = reducer(state, {
            type: ActionNames.DO_PAGINATE,
            payload: { page: 567 },
        });
        expect(state).toEqual({ filter: { ...StateQueryFilterDefault, page: 567 } });
    });

});
