import {
  CHANGE_USERNAME,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

import {
  changeUsername,
  loadRepositories,
  setRepositories,
  setLoadRepositoriesError,
} from './actions';

describe('github Actions', () => {
  describe('#changeUsername', () => {
    it('returns an object containing the action type and the username', () => {
      const username = 'alexander-elgin';

      expect(changeUsername(username)).toEqual({
        type: CHANGE_USERNAME,
        username,
      });
    });
  });

  describe('#loadRepositories', () => {
    it('returns an object containing the action type', () => {
      expect(loadRepositories()).toEqual({
        type: LOAD_REPOS,
      });
    });
  });

  describe('#setRepositories', () => {
    it('returns an object containing the action type, the username and the repositories list', () => {
      const repositories = ['repository'];
      const username = 'alexander-elgin';

      expect(setRepositories(repositories, username)).toEqual({
        type: LOAD_REPOS_SUCCESS,
        repositories,
        username,
      });
    });
  });

  describe('#setLoadRepositoriesError', () => {
    it('returns an object containing the action type and the error', () => {
      const error = {
        msg: 'Something went wrong!',
      };

      expect(setLoadRepositoriesError(error)).toEqual({
        type: LOAD_REPOS_ERROR,
        error,
      });
    });
  });
});
