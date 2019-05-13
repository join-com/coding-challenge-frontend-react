import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './modules/store';
import { withStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Header from './components/Header'
import Filters from './containers/Filters'

const reduxStore = configureStore();

const styles = (theme: any) => createStyles({
  root: {
    maxWidth: 1000,
    margin: 'auto'
  },
});

interface AppProps {
  classes: {
    root: string
  }
}

class App extends Component<AppProps> {
  render() {
    const { classes } = this.props;
    return (
      <ReduxProvider store={reduxStore}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Filters />
          </Grid>
        </Grid>
      </ReduxProvider>
    );
  }
}

export default withStyles(styles)(App);
