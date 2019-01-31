import React, { Component,Suspense } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import { theme as Theme } from "./resources/themes/overrides";


const Header = React.lazy(() => import("./components/header/header"));
const List = React.lazy(() => import("./components/list/list"));
const BikeDetail = React.lazy(() => import("./components/detail/bikeDetail"));


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
    const Footer = () =>
      <div>
        <h5 className="fr">Default bike icon has been taken from https://www.flaticon.com/ for free use</h5>
      </div>
    return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <MuiThemeProvider theme={Theme}>
              <div className={classes.root}>
                <Header />
                <Route exact path="/" component={Main} />
                <Route exact path="/list" component={List} />
                <Route exact path="/list/:id" component={BikeDetail} />
                <Footer />
              </div>
            </MuiThemeProvider>
          </Suspense>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}



export default withStyles(styles)(App);
