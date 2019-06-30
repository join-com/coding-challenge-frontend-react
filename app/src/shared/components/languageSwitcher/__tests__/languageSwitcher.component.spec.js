import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import { LanguageSwitcher } from '../languageSwitcher.component';
import { Select } from '../languageSwitcher.styles';
import { DEFAULT_LOCALE } from '../../../../i18n';

describe('LanguageSwitcher: Component', () => {
  const defaultProps = {
    language: DEFAULT_LOCALE,
    match: { params: { lang: DEFAULT_LOCALE }, url: `/${DEFAULT_LOCALE}/some/custom/url` },
    history: { push: () => {} },
  };

  const component = props => <LanguageSwitcher {...defaultProps} {...props} />;

  it('should redirect after option click', () => {
    const history = { push: spy() };
    const wrapper = shallow(component({ history }));

    const event = { target: { value: 'not-default' } };
    wrapper.find(Select).prop('onChange')(event);

    expect(history.push).to.have.been.calledOnce;
    expect(history.push).to.have.been.calledWith('/not-default/some/custom/url');
  });
});
