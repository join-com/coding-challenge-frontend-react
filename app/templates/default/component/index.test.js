import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Helmet } from 'react-helmet';

import Header from '../../../organisms/Header';
import Footer from '../../../organisms/Footer';
import Template from './';

Enzyme.configure({ adapter: new Adapter() });

describe('Default Template', () => {
  const contentTagName = 'p';
  const className = 'the-class';
  let component;

  beforeEach(() => {
    component = shallow(<Template component={contentTagName} className={className} />);
  });

  it('renders the header', () => expect(component.find(Header).length).toBe(1));
  it('renders the content', () => expect(component.find(`${contentTagName}.${className}`).length).toBe(1));
  it('renders the footer', () => expect(component.find(Footer).length).toBe(1));

  describe('Helmet', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = component.find(Helmet).first();
    });

    it('sets the tittle template', () => expect(wrapper.prop('titleTemplate')).toBe('%s - React.js Boilerplate'));
    it('sets the default tittle', () => expect(wrapper.prop('defaultTitle')).toBe('React.js Boilerplate'));

    it('sets the description', () => {
      const description = component.find('meta[name="description"]').first();
      expect(description.prop('content')).toBe('A React.js Boilerplate application');
    });
  });
});
