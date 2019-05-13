import { fromJS } from 'immutable';

import {
  SET_LOADING,
  RESET_LOADING,
} from './constants';

const initialState = fromJS({
  anticipantsNumber: 0,
});

function loadingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return state
        .set('anticipantsNumber', state.get('anticipantsNumber') + 1);
    case RESET_LOADING:
      return state
        .set('anticipantsNumber', state.get('anticipantsNumber') === 0 ? 0 : state.get('anticipantsNumber') - 1);
    default:
      return state;
  }
}

export default loadingReducer;
