import { fromJS } from 'immutable';

import {
  LOAD_ITEMS,
  LOAD_ITEMS_ERROR,
  LOAD_ITEMS_SUCCESS,
  SET_PAGE,
  SET_TOTAL,
} from './constants';

const initialState = fromJS({
  items: {
    data: false,
    error: false,
  },
  page: 1,
  total: Infinity,
});

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_ITEMS:
      return state
        .setIn(['items', 'data'], false)
        .setIn(['items', 'error'], false);
    case LOAD_ITEMS_SUCCESS:
      return state
        .setIn(['items', 'data'], action.items);
    case LOAD_ITEMS_ERROR:
      return state
        .setIn(['items', 'error'], action.error);
    case SET_PAGE:
      return state
        .set('page', action.page);
    case SET_TOTAL:
      return state
        .set('total', action.total);
    default:
      return state;
  }
};
