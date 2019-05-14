import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'redux-form/immutable'

import messages from './messages';
import styles from './styles.scss';

const CriteriaForm = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={onSubmit} className={styles.form}>
    <label htmlFor="username">
      <FormattedMessage {...messages.showRepositories} />
      <span className={styles.prefix}><FormattedMessage {...messages.atPrefix} /></span>
      <FormattedMessage {...messages.username}>
        {(placeholder) => (
          <Field
            className={styles.input}
            component="input"
            id="username"
            name="username"
            type="text"
            placeholder={placeholder}
          />
        )}
      </FormattedMessage>
    </label>
  </form>
);

CriteriaForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default CriteriaForm;
