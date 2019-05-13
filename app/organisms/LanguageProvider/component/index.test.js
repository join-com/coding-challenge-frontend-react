import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { defineMessages } from 'react-intl';

import LanguageProvider from './';

Enzyme.configure({ adapter: new Adapter() });

const messages = defineMessages({
  someMessage: {
    id: 'some.id',
    defaultMessage: 'This is some default message',
    en: 'This is some en message',
  },
});

describe('<LanguageProvider />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <LanguageProvider messages={messages} locale="en">
        {children}
      </LanguageProvider>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
