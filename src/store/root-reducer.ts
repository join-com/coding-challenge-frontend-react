import { combineReducers } from 'redux'
import { casesReducer, storeKey as casesKey } from '@/features/case-list/ducks'

export const rootReducer = combineReducers({
  // @ts-ignore
  [casesKey]: casesReducer,
})
