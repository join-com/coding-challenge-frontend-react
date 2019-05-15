import { fromJS } from 'immutable';

import {
  selectRoot,
  makeSelectItemsError,
  makeSelectItemsData,
} from './selectors';

describe('bikeWise selectors', () => {
  const items = ['repository'];
  const error = new Error('something weird happen');

  const initialState = fromJS({
    items: {
      data: items,
      error,
    },
  });

  const mockedState = fromJS({
    bikeWise: initialState,
  });

  describe('#selectRoot', () => {
    it('selects the root state', () => expect(selectRoot(mockedState)).toEqual(initialState));
  });

  describe('#makeSelectItemsError', () => {
    const errorSelector = makeSelectItemsError();
    it('select the error', () => expect(errorSelector(mockedState)).toEqual(error));
  });

  describe('#makeSelectItemsData', () => {
    const itemsSelector = makeSelectItemsData();
    it('select the items', () => expect(itemsSelector(mockedState)).toEqual(fromJS(items)));
  });
});
