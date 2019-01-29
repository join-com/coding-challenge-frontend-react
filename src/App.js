import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import Header from "./components/header/header";
import List from "./components/list/list";

const styles = {
  root: {
    flexGrow: 1,
  }
}


class App extends Component {
  render() {
    const { classes } = this.props;
    const Main = () =>
      <Redirect to="/list" />
    return (
      <Provider store={store}>
        <Router>
          <div className={classes.root}>
            <Header />
            <Route exact path="/" component={Main} />
            <Route exact path="/list" component={List} />
          </div>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}



export default withStyles(styles)(App);
