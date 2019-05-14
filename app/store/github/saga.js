import { call, put, select, takeLatest } from 'redux-saga/effects';
import { formValueSelector } from 'redux-form/immutable';

import { LOAD_REPOS, REPOSITORIES_FORM } from './constants';
import { setRepositories, setLoadRepositoriesError } from './actions';
import { resetLoading } from '../loading/actions';

import { get } from '../../utils/request';

const formSelector = formValueSelector(REPOSITORIES_FORM);

export function* getRepositories() {
  const username = yield select((state) => formSelector(state, 'title'));

  const params = {
    type: 'all',
    sort: 'updated',
  };

  try {
    const repositories = yield call(get, `/users/${username}/repos`, params, 'https://api.github.com');
    yield put(setRepositories(repositories));
  } catch (err) {
    yield put(setLoadRepositoriesError(err));
  } finally {
    yield put(resetLoading());
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_REPOS, getRepositories);
}
