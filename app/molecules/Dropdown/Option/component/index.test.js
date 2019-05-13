import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';
import Adapter from 'enzyme-adapter-react-16';

import Option from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Option />', () => {
  it('should render default language messages', () => {
    const defaultEnMessage = 'someContent';
    const message = defineMessages({
      enMessage: {
        id: 'boilerplate.organisms.LocaleSwitcher.en',
        defaultMessage: defaultEnMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Option value="en" message={message.enMessage} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(<Option value="en" message={message.enMessage} />)).toBe(true);
  });

  it('should display `value`(two letter language code) when `message` is absent', () => {
    const renderedComponent = mount(
      <IntlProvider locale="de">
        <Option value="de" />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toBe('de');
  });
});
