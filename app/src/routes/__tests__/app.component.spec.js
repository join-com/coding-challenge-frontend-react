import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import { DEFAULT_LOCALE, LOCALES } from '../../i18n';
import { App } from '../app.component';

describe('App: Component', () => {
  const children = <div className="app__children">Children</div>;
  const defaultProps = {
    setLanguage: () => {},
    startup: () => {},
    language: DEFAULT_LOCALE,
    match: { params: { lang: LOCALES.POLISH } },
  };

  const component = props => (
    <App {...defaultProps} {...props}>
      {children}
    </App>
  );

  it('should not render App when language is not set', () => {
    const wrapper = shallow(component({ language: undefined }));
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should render App when language is set', () => {
    const wrapper = shallow(component({ language: 'en' }));
    global.expect(wrapper).toMatchSnapshot();
  });

  it('should set proper language based on url', () => {
    const setLanguage = spy();
    shallow(component({ setLanguage }));

    expect(setLanguage).to.have.been.calledOnce;
    expect(setLanguage).to.have.been.calledWith(LOCALES.POLISH);
  });

  it('should set default language based on url when url is not matched', () => {
    const setLanguage = spy();
    shallow(component({ setLanguage, match: { params: { lang: undefined } } }));

    expect(setLanguage).to.have.been.calledOnce;
    expect(setLanguage).to.have.been.calledWith(DEFAULT_LOCALE);
  });

  it('should set proper language when url changes', () => {
    const setLanguage = spy();
    const wrapper = shallow(component({ setLanguage }));

    setLanguage.resetHistory();
    wrapper.setProps({ match: { params: { lang: LOCALES.ENGLISH } } });

    expect(setLanguage).to.have.been.calledOnce;
    expect(setLanguage).to.have.been.calledWith(LOCALES.ENGLISH);
  });

  it('should call startup on mount', () => {
    const startup = spy();
    shallow(component({ startup }));

    expect(startup).to.have.been.calledOnce;
  });
});
