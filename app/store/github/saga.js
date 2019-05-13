import { call, put, select, takeLatest } from 'redux-saga/effects';

import { LOAD_REPOS } from './constants';
import { setRepositories, setLoadRepositoriesError } from './actions';
import { resetLoading } from '../loading/actions';

import { get } from '../../utils/request';
import { makeSelectCurrentUsername } from './selectors';

export function* getRepositories() {
  const username = yield select(makeSelectCurrentUsername());

  const params = {
    type: 'all',
    sort: 'updated',
  };

  try {
    const repositories = yield call(get, `/users/${username}/repos`, params, 'https://api.github.com');
    yield put(setRepositories(repositories, username));
  } catch (err) {
    yield put(setLoadRepositoriesError(err));
  } finally {
    yield put(resetLoading());
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_REPOS, getRepositories);
}
