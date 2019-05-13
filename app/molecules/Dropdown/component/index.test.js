import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { IntlProvider, defineMessages } from 'react-intl';
import Adapter from 'enzyme-adapter-react-16';

import Dropdown from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Dropdown />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const defaultDeMessage = 'someOtherContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.organisms.LocaleSwitcher.en',
        defaultMessage: defaultEnMessage,
      },
      de: {
        id: 'boilerplate.organisms.LocaleSwitcher.en',
        defaultMessage: defaultDeMessage,
      },
    });
    const renderedComponent = shallow(
      <IntlProvider locale="en">
        <Dropdown values={['en', 'de']} messages={messages} />
      </IntlProvider>
    );
    expect(renderedComponent.contains(<Dropdown values={['en', 'de']} messages={messages} />)).toBe(true);
    expect(renderedComponent.find('option').length).toBe(0);
  });
  it('should not have options if props.values is not defined', () => {
    const renderedComponent = shallow(<Dropdown />);
    expect(renderedComponent.contains(<option>--</option>)).toBe(true);
    expect(renderedComponent.find('option').length).toBe(1);
  });
});
