import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_ERROR,
} from './constants';

import {
  loadItems,
  setItems,
  setLoadItemsError,
} from './actions';

describe('#loadItems', () => {
  it('returns an object containing the action type', () => {
    expect(loadItems()).toEqual({
      type: LOAD_ITEMS,
    });
  });
});

describe('#setItems', () => {
  it('returns an object containing the action type, the username and the items list', () => {
    const items = ['repository'];

    expect(setItems(items)).toEqual({
      type: LOAD_ITEMS_SUCCESS,
      items,
    });
  });
});

describe('#setLoadItemsError', () => {
  it('returns an object containing the action type and the error', () => {
    const error = {
      msg: 'Something went wrong!',
    };

    expect(setLoadItemsError(error)).toEqual({
      type: LOAD_ITEMS_ERROR,
      error,
    });
  });
});
