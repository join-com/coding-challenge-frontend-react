import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { reducer as startupReducer } from '../startup.redux';

describe('Startup: redux', () => {
  const state = Immutable({});

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(startupReducer(undefined, {})).to.deep.equal(state);
    });

    it('should return state on unknown action', () => {
      expect(startupReducer(state, { type: 'unknown-action' })).to.deep.equal(state);
    });
  });
});
