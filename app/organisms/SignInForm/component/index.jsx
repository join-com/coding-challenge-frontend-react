import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form/immutable';
import { FormattedMessage, intlShape } from 'react-intl';

import Error from '../../../atoms/Error'
import messages from './messages';

const SignInForm = ({ error, intl, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <h2>
      <FormattedMessage {...messages.signIn} />
    </h2>
    <Error>{error}</Error>

    <Grid container spacing={24}>

      <Grid item xs={12}>
        <Field component={TextField} label={intl.formatMessage(messages.email)} name="email" type="email" />
      </Grid>

      <Grid item xs={12}>
        <Field component={TextField} label={intl.formatMessage(messages.password)} name="password" type="password" />
      </Grid>

      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">
          <FormattedMessage {...messages.signIn} />
        </Button>
      </Grid>

      <Grid item xs={12}>
        <FormattedMessage {...messages.noAccount} /> <Link to={'/signup'}><FormattedMessage {...messages.signUp} /></Link>
      </Grid>

    </Grid>
  </form>
);

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default SignInForm;
