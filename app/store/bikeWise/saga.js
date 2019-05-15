import { call, put, select, takeLatest } from 'redux-saga/effects';
import { formValueSelector } from 'redux-form/immutable';

import QueryBuilder from './QueryBuilder';
import { LOAD_ITEMS, CRITERIA_FORM } from './constants';
import { makeSelectPage } from './selectors';
import { setItems, setLoadItemsError } from './actions';
import { resetLoading } from '../loading/actions';

import { get } from '../../utils/request';

const formSelector = formValueSelector(CRITERIA_FORM);

export function* getItems() {
  const page = yield select(makeSelectPage());
  const query = yield select((state) => formSelector(state, 'title'));
  const queryBuilder = new QueryBuilder({ query });

  try {
    const resData = yield call(get, queryBuilder.getPath(), queryBuilder.getParams(page), QueryBuilder.getHost());
    yield put(setItems(resData.incidents));
  } catch (err) {
    yield put(setLoadItemsError(err));
  } finally {
    yield put(resetLoading());
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_ITEMS, getItems);
}
