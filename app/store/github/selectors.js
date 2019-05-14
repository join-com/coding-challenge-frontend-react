import { createSelector } from 'reselect';

const selectGithub = (state) => state.get('github');


const makeSelectUsername = () => createSelector(
  selectGithub,
  (githubState) => githubState.get('username')
);


const makeSelectRepositoriesData = () => createSelector(
  selectGithub,
  (githubState) => githubState.get('repositories')
);

const makeSelectRepositories = () => createSelector(
  makeSelectRepositoriesData(),
  (repositoriesDataState) => repositoriesDataState.get('data')
);

const makeSelectError = () => createSelector(
  makeSelectRepositoriesData(),
  (repositoriesDataState) => repositoriesDataState.get('error')
);


export {
  selectGithub,
  makeSelectError,
  makeSelectRepositories,
  makeSelectUsername,
};
