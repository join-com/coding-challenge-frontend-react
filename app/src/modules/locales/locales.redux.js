import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

export const { Types: LocalesTypes, Creators: LocalesActions } = createActions(
  {
    setLanguage: ['language'],
  },
  { prefix: 'LOCALES/' }
);

export const INITIAL_STATE = new Immutable({
  language: null,
});

export const setLanguageHandler = (state = INITIAL_STATE, action) => state.set('language', action.language);

export const HANDLERS = {
  [LocalesTypes.SET_LANGUAGE]: setLanguageHandler,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
