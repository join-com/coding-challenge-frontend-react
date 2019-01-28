import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import error from './error/reducer';
import loading from './loading/reducer';
import incidents from './incidents/reducer';

const rootReducer = combineReducers({
  error,
  routing,
  loading,
  incidents,
});

export default rootReducer;
