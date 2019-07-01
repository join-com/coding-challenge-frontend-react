import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Select } from './languageSwitcher.styles';
import { appLocales } from '../../../i18n';

export class LanguageSwitcher extends PureComponent {
  static propTypes = {
    language: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  handleChange = e => {
    this.props.history.push(this.props.match.url.replace(this.props.match.params.lang, e.target.value));
  };

  render() {
    return (
      <Select value={this.props.language} onChange={this.handleChange}>
        {appLocales.map((locale, index) => (
          <option key={index} value={locale}>
            {locale}
          </option>
        ))}
      </Select>
    );
  }
}
