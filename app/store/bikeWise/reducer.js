import { fromJS } from 'immutable';

import {
  LOAD_ITEMS,
  LOAD_ITEMS_ERROR,
  LOAD_ITEMS_SUCCESS,
} from './constants';

const initialState = fromJS({
  items: {
    data: false,
    error: false,
  },
  page: 1,
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
    default:
      return state;
  }
};
