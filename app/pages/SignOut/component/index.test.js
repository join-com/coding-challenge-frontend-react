import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FormattedMessage } from 'react-intl';

import SignOutPage from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<SignOutPage />', () => {
  let component;
  let signOut;

  beforeEach(() => {
    signOut = jest.fn();
    component = shallow(<SignOutPage signOut={signOut} />);
  });

  it('renders default content', () => {
    expect(component.type()).toBe('p');
    expect(component.childAt(1).text()).toEqual('...');

    const message = component.childAt(0);
    expect(message.type()).toEqual(FormattedMessage);
    expect(message.prop('id')).toBe('boilerplate.pages.SignOut.signOutMessage');
    expect(message.prop('defaultMessage')).toBe('Signing out');
  });

  afterEach(() => expect(signOut).toBeCalled());
});
