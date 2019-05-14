import { fromJS } from 'immutable';

import githubReducer from './reducer';

import {
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
  };

  beforeEach(() => {
    state = fromJS(initialState);
  });

  describe('default', () => {
    it('returns the initial state', () => expect(githubReducer()).toEqual(state));
  });

  describe('#loadRepositories', () => {
    it('resets the error and the repositories list', () => {
      const expectedResult = state.setIn(['repositories', 'data'], false).setIn(['repositories', 'error'], false);
      expect(githubReducer(state, loadRepositories())).toEqual(expectedResult);
    });
  });

  describe('#setRepositories', () => {
    it('resets the error and the repositories list', () => {
      const reps = ['repository'];
      const expectedResult = state.setIn(['repositories', 'data'], reps);
      expect(githubReducer(state, setRepositories(reps))).toEqual(expectedResult);
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
