import React from 'react';
import { shallow } from 'enzyme';
import Immutable from 'seamless-immutable';

import { Home } from '../home.component';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('Home: Component', () => {
  const defaultProps = {
    items: Immutable([{ id: 1 }, { id: 2 }, { id: 3 }]),
    intl: { formatMessage: ({ id }) => id },
    language: DEFAULT_LOCALE,
  };

  const component = props => <Home {...defaultProps} {...props} />;

  it('should render correctly', () => {
    const wrapper = shallow(component());
    global.expect(wrapper).toMatchSnapshot();
  });
});
