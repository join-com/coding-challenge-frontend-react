import { fromJS } from 'immutable';

import {
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from './constants';

const initialState = fromJS({
  user: null,
});

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.set('user', action.user);
    case SIGN_OUT:
      return state.set('user', null);
    default:
      return state;
  }
}

export default reducer;
