import { fromJS } from 'immutable';

import { makeSelectLocation } from './selectors';

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();

  it('selects the location', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });

    const mockedState = fromJS({
      route,
    });

    expect(locationStateSelector(mockedState)).toEqual(route.get('location').toJS());
  });
});
