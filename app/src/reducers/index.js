import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import root from './root'

export default combineReducers({
  routing,
  root
})
