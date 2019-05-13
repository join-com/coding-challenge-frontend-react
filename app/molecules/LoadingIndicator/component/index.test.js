import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircularProgress from '@material-ui/core/CircularProgress';

import LoadingIndicator from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<LoadingIndicator />', () => {
  let progress;

  beforeEach(() => {
    progress = shallow(
      <LoadingIndicator />
    ).childAt(0);
  });

  it('renders circular progress', () => expect(progress.type()).toEqual(CircularProgress));
  it('sets the progress color', () => expect(progress.prop('color')).toBe('primary'));
});
