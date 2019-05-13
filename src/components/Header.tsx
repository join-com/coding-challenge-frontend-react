import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import logo from '../logo.svg'

const styles = (theme: any) => createStyles({
  header: {
    fontSize: theme.typography.pxToRem(20),
    marginBottom: 5,
  },
  subHeader: {
    fontSize: theme.typography.pxToRem(18),
  },
  wrapper: {
    marginBottom: 20,
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 'auto',
    maxWidth: '80%',
  },
});

interface HeaderProps {
  classes: {
    wrapper: string
    header: string
    subHeader: string
    logo: string
    cell: string
  }
}

class Header extends React.PureComponent<HeaderProps> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.wrapper}>
        <Grid item xs={3} sm={2} md={1} className={classes.cell}>
          <img src={logo} className={classes.logo} alt='' />
        </Grid>
        <Grid item xs={9} sm={10} md={11} className={classes.cell}>
          <Typography className={classes.header}>
            Police department of Berlin
          </Typography>
          <Typography className={classes.subHeader}>
            Stolen bikes
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Header);
