import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
} from './constants';

const initialState = fromJS({
  repositories: {
    data: false,
    error: false,
  },
  username: {
    current: '',
    selected: '',
  },
});

function githubReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .setIn(['username', 'current'], action.username);
    case LOAD_REPOS:
      return state
        .setIn(['repositories', 'data'], false)
        .setIn(['repositories', 'error'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['username', 'selected'], action.username)
        .setIn(['repositories', 'data'], action.repositories);
    case LOAD_REPOS_ERROR:
      return state
        .setIn(['repositories', 'error'], action.error);
    default:
      return state;
  }
}

export default githubReducer;
