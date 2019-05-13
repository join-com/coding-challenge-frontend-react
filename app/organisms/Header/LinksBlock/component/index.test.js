import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';

import Link from '../Link';

import LinksBlock from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<LinksBlock />', () => {
  let wrapper;

  const checkLink = (index, icon, uri, messageId, text) => {
    it(`renders a ${text} link`, () => {
      const link = wrapper.childAt(index);
      expect(link.type()).toEqual(Link);
      expect(link.prop('icon')()).toEqual(icon());
      expect(link.prop('uri')).toBe(uri);

      const message = link.childAt(0);
      expect(message.prop('id')).toBe(`boilerplate.shared.Auth.${messageId}`);
      expect(message.prop('defaultMessage')).toBe(text);
    });
  };

  const initialize = (authenticated) => {
    beforeEach(() => {
      wrapper = shallow(<LinksBlock authenticated={authenticated} />).childAt(0);
    });
  };

  describe('authenticated', () => {
    initialize(true);
    checkLink(0, FaSignOutAlt, '/signout', 'signOut', 'Sign out');
  });

  describe('NOT authenticated', () => {
    initialize(false);
    checkLink(0, FaSignInAlt, '/signin', 'signIn', 'Sign in');
    checkLink(1, FaUserPlus, '/signup', 'signUp', 'Sign up');
  });

  afterEach(() => {
    expect(wrapper.type()).toBe('div');
    expect(wrapper.prop('className')).toBe('auth-links-block');
  });
});
