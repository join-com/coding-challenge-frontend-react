import { fromJS } from 'immutable';

import {
  selectLoading,
  makeSelectLoading,
} from './selectors';

describe('loading selector', () => {
  const anticipantsNumber = 0;
  const loadingState = fromJS({ anticipantsNumber });

  const mockedState = fromJS({
    loading: loadingState,
  });

  describe('#selectLoading', () => {
    it('select the loading state', () => expect(selectLoading(mockedState)).toEqual(loadingState));
  });

  describe('#makeSelectLoading', () => {
    const loadingSelector = makeSelectLoading();
    it('selects the loading', () => expect(loadingSelector(mockedState)).toEqual(false));
  });
});
