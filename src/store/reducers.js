import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import loading from './loading/reducer';
import cases from './cases/reducer';

const rootReducer = combineReducers({
  routing,
  loading,
  cases,
});

export default rootReducer;
