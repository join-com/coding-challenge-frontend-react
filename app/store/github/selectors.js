import { createSelector } from 'reselect';

const selectGithub = (state) => state.get('github');


const makeSelectUsername = () => createSelector(
  selectGithub,
  (githubState) => githubState.get('username')
);

const makeSelectCurrentUsername = () => createSelector(
  makeSelectUsername(),
  (githubUsernameState) => githubUsernameState.get('current')
);

const makeSelectSelectedUsername = () => createSelector(
  makeSelectUsername(),
  (githubUsernameState) => githubUsernameState.get('selected')
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
  makeSelectCurrentUsername,
  makeSelectSelectedUsername,
};
