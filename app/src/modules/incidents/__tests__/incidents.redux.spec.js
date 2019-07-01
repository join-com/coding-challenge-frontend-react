import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { reducer as incidentsReducer, IncidentsActions, IncidentsTypes } from '../incidents.redux';

describe('Incidents: redux', () => {
  const state = Immutable({
    loading: false,
    list: [],
    selected: {},
    error: null,
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(incidentsReducer(undefined, {})).to.deep.equal(state);
    });

    it('should return state on unknown action', () => {
      expect(incidentsReducer(state, { type: 'unknown-action' })).to.deep.equal(state);
    });
  });
});
