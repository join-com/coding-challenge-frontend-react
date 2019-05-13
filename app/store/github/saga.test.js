import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_REPOS } from './constants';
import { setRepositories, setLoadRepositoriesError } from './actions';
import { resetLoading } from '../loading/actions';

import generateRootSaga, { getRepositories } from './saga';

const username = 'alexander-elgin';

/* eslint-disable redux-saga/yield-effects */
describe('github Saga', () => {
  let getRepositoriesGenerator;

  beforeEach(() => {
    getRepositoriesGenerator = getRepositories();

    const selectDescriptor = getRepositoriesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getRepositoriesGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  describe('the repositories data are fetched successfully', () => {
    it('dispatches the setRepositories action', () => {
      const repositories = [
        {
          name: 'First repo',
        },
        {
          name: 'Second repo',
        },
      ];

      const putDescriptor = getRepositoriesGenerator.next(repositories).value;
      expect(putDescriptor).toEqual(put(setRepositories(repositories, username)));
    });
  });

  describe('the request fails', () => {
    it('dispatches the setLoadRepositoriesError action', () => {
      const response = new Error('Some error');
      const putDescriptor = getRepositoriesGenerator.throw(response).value;
      expect(putDescriptor).toEqual(put(setLoadRepositoriesError(response)));
    });
  });

  afterEach(() => {
    const putDescriptor = getRepositoriesGenerator.next().value;
    expect(putDescriptor).toEqual(put(resetLoading()));
  });
});

describe('root saga', () => {
  const rootSaga = generateRootSaga();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = rootSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_REPOS, getRepositories));
  });
});
