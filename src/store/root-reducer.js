import { combineReducers } from 'redux'
import {
  incidentsReducer,
  storeKey as incidentsKey,
} from '@/features/incidents-list/ducks'

export const rootReducer = combineReducers({
  [incidentsKey]: incidentsReducer,
})
