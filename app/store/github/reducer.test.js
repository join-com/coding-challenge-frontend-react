import { fromJS } from 'immutable';

import githubReducer from './reducer';

import {
  changeUsername,
  loadRepositories,
  setRepositories,
  setLoadRepositoriesError,
} from './actions';

describe('github Reducer', () => {
  let state;
  const initialState = {
    repositories: {
      data: false,
      error: false,
    },
    username: {
      current: '',
      selected: '',
    },
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(githubReducer()).toEqual(state));
  });

  describe('#changeUsername', () => {
    it('changes the current username', () => {
      const username = 'alexander-elgin';
      expect(githubReducer(state, changeUsername(username))).toEqual(state.setIn(['username', 'current'], username));
    });
  });

  describe('#loadRepositories', () => {
    it('resets the error and the repositories list', () => {
      const expectedResult = state.setIn(['repositories', 'data'], false).setIn(['repositories', 'error'], false);
      expect(githubReducer(state, loadRepositories())).toEqual(expectedResult);
    });
  });

  describe('#setRepositories', () => {
    it('resets the error and the repositories list', () => {
      const username = 'alexander-elgin';
      const reps = ['repository'];
      const expectedResult = state.setIn(['username', 'selected'], username).setIn(['repositories', 'data'], reps);
      expect(githubReducer(state, setRepositories(reps, username))).toEqual(expectedResult);
    });
  });

  describe('#setLoadRepositoriesError', () => {
    it('sets the error', () => {
      const error = {
        msg: 'something weird happen',
      };

      const expectedResult = state.setIn(['repositories', 'error'], error);
      expect(githubReducer(state, setLoadRepositoriesError(error))).toEqual(expectedResult);
    });
  });
});
