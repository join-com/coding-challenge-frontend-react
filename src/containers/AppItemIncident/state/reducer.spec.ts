import * as _ from 'lodash';

import { reducer } from './reducer';
import { Actions as ActionNames } from './types';

import * as mocks from '../../../../mocks';


describe('AppListIncidents / reducers', () => {

    it('no-op', () => {
        // @ts-ignore
        let state = reducer();
        expect(state).toEqual({});
    });

    it('no-op due to unexisting action type', () => {
        let dummy = { error: 'Lorem ipsum...' } as any;
        let state = _.cloneDeep(dummy);
        state = reducer(state, {
            type: '_',
            payload: { error: 'qwerty' },
        });
        expect(state).toEqual(dummy);
    });

    it('DO_GET_INCIDENT_BY_ID', () => {
        let state = { incident: undefined } as any;
        state = reducer(state, {
            type: ActionNames.DO_GET_INCIDENT_BY_ID,
            payload: { incident: mocks.incident },
        });
        expect(state).toEqual({ incident: mocks.incident });
    });

    it('DO_CLEAR_ERROR', () => {
        let state = { error: 'qwerty' } as any;
        state = reducer(state, {
            type: ActionNames.DO_CLEAR_ERROR,
        });
        expect(state).toEqual({ error: undefined });
    });

    it('DO_SET_ERROR', () => {
        let state = { error: 'qwerty' } as any;
        state = reducer(state, {
            type: ActionNames.DO_SET_ERROR,
            payload: { error: 'Lorem ipsum dolor sit amet...' },
        });
        expect(state).toEqual({ error: 'Lorem ipsum dolor sit amet...' });
    });

});
