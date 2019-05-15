import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";

import { ITEMS_PER_PAGE } from '../../../store/bikeWise/constants';

const Footer = ({ navigate, page, total }) => {
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <Grid container direction="row" justify="space-between" alignItems="center" spacing={8}>
      <Grid item>
        <Button disabled={page === 1} onClick={() => navigate(1)}>First</Button>
      </Grid>
      <Grid item>
        <Button disabled={page === 1} onClick={() => navigate(page - 1)}>Prev</Button>
      </Grid>
      <Grid item>
        <Button disabled={page === totalPages} onClick={() => navigate(page + 1)}>Next</Button>
      </Grid>
      <Grid item>
        <Button disabled={page === totalPages} onClick={() => navigate(totalPages)}>Last</Button>
      </Grid>
    </Grid>
  );
};

export default Footer;
