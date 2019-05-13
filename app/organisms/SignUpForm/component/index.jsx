import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { TextField } from 'redux-form-material-ui';
import { Field } from 'redux-form/immutable';
import { FormattedMessage, intlShape } from 'react-intl';

import Error from '../../../atoms/Error'
import messages from './messages';

const SignUpForm = ({ error, intl, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <h2>
      <FormattedMessage {...messages.signUp} />
    </h2>
    <Error>{error}</Error>

    <Grid container spacing={24}>

      <Grid item xs={12}>
        <Field component={TextField} label={intl.formatMessage(messages.name)} name="name" type="text" />
      </Grid>

      <Grid item xs={12}>
        <Field component={TextField} label={intl.formatMessage(messages.email)} name="email" type="email" />
      </Grid>

      <Grid item xs={12}>
        <Field component={TextField} label={intl.formatMessage(messages.password)} name="password" type="password" />
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" type="submit" color="primary">
          <FormattedMessage {...messages.signUp} />
        </Button>
      </Grid>

      <Grid item xs={12}>
        <FormattedMessage {...messages.alreadyHaveAccount} /> <Link to={'/signin'}><FormattedMessage {...messages.signIn} /></Link>
      </Grid>

    </Grid>
  </form>
);

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default SignUpForm;
