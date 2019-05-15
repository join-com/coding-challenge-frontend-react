import {
  LOAD_ITEMS,
  LOAD_ITEMS_ERROR,
  LOAD_ITEMS_SUCCESS,
  SET_PAGE,
  SET_TOTAL,
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

export function setPage(page) {
  return {
    type: SET_PAGE,
    page,
  };
}

export function setTotal(total) {
  return {
    type: SET_TOTAL,
    total,
  };
}
