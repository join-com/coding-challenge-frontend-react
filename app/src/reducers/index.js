import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import root from './root'
import filter from './filter'

export default combineReducers({
  routing,
  root,
  filter
})
