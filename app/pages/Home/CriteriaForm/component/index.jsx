import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { Field } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';

import messages from './messages';
import styles from './styles.scss';

const CriteriaForm = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <Grid container direction="row" justify="flex-start" alignItems="flex-end" spacing={8}>
      <Grid item>
        <FormattedMessage {...messages.caseDescription}>
          {label => (
            <Field
              component={TextField}
              label={label}
              type="text"
              name="title"
            />
          )}
        </FormattedMessage>
      </Grid>
      <Grid item>
        <Button onClick={onSubmit}>
          <FormattedMessage {...messages.search} />
        </Button>
      </Grid>
    </Grid>
  </form>
);

CriteriaForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default CriteriaForm;
