import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { Field } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';

import messages from './messages';
import styles from './styles.scss';

const CriteriaForm = ({ handleSubmit, onSubmit, invalid }) => (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={8}>
      <Grid item>
        <FormattedMessage {...messages.caseDescription}>
          {label => (
            <Field
              component={TextField}
              label={label}
              name="title"
              type="text"
            />
          )}
        </FormattedMessage>
      </Grid>
      <Grid item>
        <Field
          component={TextField}
          label="from"
          name="from"
          type="date"
          style={{ paddingLeft: 40 }}
        />
      </Grid>
      <Grid item>
        <Field
          component={TextField}
          label="to"
          name="to"
          type="date"
          style={{ paddingLeft: 20 }}
        />
      </Grid>
      <Grid item>
        <Button disabled={invalid} onClick={onSubmit} style={{marginTop: '0.9em'}}>
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
