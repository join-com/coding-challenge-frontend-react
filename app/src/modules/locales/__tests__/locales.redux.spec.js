import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { reducer as localesReducer, LocalesActions, LocalesTypes } from '../locales.redux';

describe('Locales: redux', () => {
  const state = Immutable({
    language: null,
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(localesReducer(undefined, {})).to.deep.equal(state);
    });

    it('should return state on unknown action', () => {
      expect(localesReducer(state, { type: 'unknown-action' })).to.deep.equal(state);
    });

    it('should set data on SET_LANGUAGE', () => {
      const language = 'en';
      const expectedState = state.set('language', language);
      const action = { language, type: LocalesTypes.SET_LANGUAGE };
      expect(localesReducer(state, action)).to.deep.equal(expectedState);
    });
  });

  describe('setLanguage', () => {
    it('should return correct type', () => {
      expect(LocalesActions.setLanguage().type).to.equal(LocalesTypes.SET_LANGUAGE);
    });

    it('should return proper payload', () => {
      const language = 'en';
      expect(LocalesActions.setLanguage(language).language).to.deep.equal(language);
    });
  });
});
