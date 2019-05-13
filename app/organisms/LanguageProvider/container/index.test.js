import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { FormattedMessage, defineMessages } from 'react-intl';

import LanguageProvider from './';
import configureStore from '../../../utils/store';
import reducer from '../../../store/language/reducer';

import { translationMessages } from '../../../i18n';

Enzyme.configure({ adapter: new Adapter() });

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
    en: 'This is some en message',
  },
});

describe('<LanguageProvider />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      language: reducer,
    });
  });

  it('should render the default language messages', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </LanguageProvider>
      </Provider>
    );
    expect(renderedComponent.contains(<FormattedMessage {...messages.someMessage} />)).toBe(true);
  });
});
