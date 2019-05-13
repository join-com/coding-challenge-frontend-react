import { fromJS } from 'immutable';

import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  location: null,
});

function routeReducer(state = initialState, action = {}) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default routeReducer;
