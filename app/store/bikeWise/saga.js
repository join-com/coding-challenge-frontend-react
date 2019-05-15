import { call, put, select, takeLatest } from 'redux-saga/effects';
import { formValueSelector } from 'redux-form/immutable';
import moment from 'moment';

import QueryBuilder from './QueryBuilder';
import { LOAD_ITEMS, CRITERIA_FORM } from './constants';
import { makeSelectPage, makeSelectTotal } from './selectors';
import { setItems, setLoadItemsError, setTotal } from './actions';
import { ITEMS_PER_PAGE } from './constants';
import { resetLoading } from '../loading/actions';

import { get } from '../../utils/request';

const formSelector = formValueSelector(CRITERIA_FORM);

export function* getItems() {
  const dateInterval = {};
  dateInterval.occurred_after = yield select((state) => formSelector(state, 'from'));
  dateInterval.occurred_before = yield select((state) => formSelector(state, 'to'));

  Object.keys(dateInterval).forEach(field => {
    if(dateInterval[field] !== undefined) {
      dateInterval[field] = moment(dateInterval[field]).unix();
    }
  });

  const query = yield select((state) => formSelector(state, 'title'));
  const page = yield select(makeSelectPage());
  const total = yield select(makeSelectTotal());
  const queryBuilder = new QueryBuilder({...dateInterval, query });

  try {
    if(total !== Infinity) {
      const resData = yield call(get, queryBuilder.getPath(), queryBuilder.getParams(page),
        QueryBuilder.getHost());
      yield put(setItems(resData.incidents));
    } else {

      let currentPage = page;
      let foundItemsNumber = Infinity;

      while (foundItemsNumber >= ITEMS_PER_PAGE) {
        const resData = yield call(get, queryBuilder.getPath(), queryBuilder.getParams(currentPage),
          QueryBuilder.getHost());

        if(currentPage === page) {
          yield put(setItems(resData.incidents));
        }

        currentPage++;
        foundItemsNumber = resData.incidents.length;
      }

      yield put(setTotal((currentPage - 2) * ITEMS_PER_PAGE + foundItemsNumber));

    }
  } catch (err) {
    yield put(setLoadItemsError(err));
  } finally {
    yield put(resetLoading());
  }
}

export default function* rootSaga() {
  yield takeLatest(LOAD_ITEMS, getItems);
}
