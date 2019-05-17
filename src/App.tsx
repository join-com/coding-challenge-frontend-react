import React, { Component } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import configureStore from './modules/store'
import { withStyles, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Header from './components/Header'
import Filters from './containers/Filters'
import Data from './containers/Data'

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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ReduxProvider store={reduxStore}>
          <Grid container className={classes.root}>
            <Header />
            <Filters />
            <Data />
          </Grid>
        </ReduxProvider>
      </MuiPickersUtilsProvider>
    );
  }
}

export default withStyles(styles)(App);
