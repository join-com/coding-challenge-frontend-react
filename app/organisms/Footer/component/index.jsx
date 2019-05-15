import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";

const Footer = ({ navigate, page, total }) => (
  <Grid container direction="row" justify="space-between" alignItems="center" spacing={8}>
    <Grid item>
      <Button disabled={page === 1} onClick={() => navigate(1)}>First</Button>
    </Grid>
    <Grid item>
      <Button disabled={page === 1} onClick={() => navigate(page - 1)}>Prev</Button>
    </Grid>
    <Grid item>
      <Button disabled={page === total} onClick={() => navigate(page + 1)}>Next</Button>
    </Grid>
  </Grid>
);

export default Footer;
