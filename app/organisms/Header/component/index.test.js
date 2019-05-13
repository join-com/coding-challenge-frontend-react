import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { IntlProvider } from 'react-intl';

import Header from './';
import LinksBlock from '../LinksBlock';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
  const AUTHENTICATED = false;
  let wrapper;

  beforeEach(() => {
    const intlProvider = new IntlProvider({ locale: 'en', messages: {} }, {});
    const { intl } = intlProvider.getChildContext();
    wrapper = shallow(<Header authenticated={AUTHENTICATED} intl={intl} />);
  });

  it('renders auth links block', () => {
    expect(wrapper.find(LinksBlock).first().prop('authenticated')).toEqual(AUTHENTICATED);
  });
});
