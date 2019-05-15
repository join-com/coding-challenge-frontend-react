import {
  LOAD_ITEMS,
  LOAD_ITEMS_ERROR,
  LOAD_ITEMS_SUCCESS,
} from './constants';

export function loadItems() {
  return {
    type: LOAD_ITEMS,
  };
}

export function setItems(items) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    items,
  };
}

export function setLoadItemsError(error) {
  return {
    type: LOAD_ITEMS_ERROR,
    error,
  };
}
