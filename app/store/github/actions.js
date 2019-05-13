import {
  CHANGE_USERNAME,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
} from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function loadRepositories() {
  return {
    type: LOAD_REPOS,
  };
}

export function setRepositories(repositories, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repositories,
    username,
  };
}

export function setLoadRepositoriesError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
