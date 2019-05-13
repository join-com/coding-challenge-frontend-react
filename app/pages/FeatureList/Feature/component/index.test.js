import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FormattedMessage } from 'react-intl';

import Feature from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Feature />', () => {
  const descriptionData = {
    id: 'boilerplate.pages.FeatureList.network.message',
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
  `,
  };
  const headerData = {
    id: 'boilerplate.pages.FeatureList.network.header',
    defaultMessage: 'Offline-first',
  };

  let component;

  beforeEach(() => {
    component = shallow(<Feature description={descriptionData} header={headerData} />);
  });

  it('renders the description', () => {
    const description = component.find('.feature-description').first().childAt(0);
    expect(description.type()).toEqual(FormattedMessage);
    expect(description.prop('id')).toBe(descriptionData.id);
    expect(description.prop('defaultMessage')).toBe(descriptionData.defaultMessage);
  });

  it('renders the header', () => {
    const header = component.find('.feature-header').first().childAt(0);
    expect(header.type()).toEqual(FormattedMessage);
    expect(header.prop('id')).toBe(headerData.id);
    expect(header.prop('defaultMessage')).toBe(headerData.defaultMessage);
  });
});
