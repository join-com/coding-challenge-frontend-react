import { combineReducers } from 'redux';
import items from './ItemsReducer';

export const reducer = combineReducers({ items });
export { setItemsCount, setSearchQuery } from './ItemsReducer';