import React from "react";
import "./App.css";
import Home from "./home/Home";
import Incident from "./incident/Incident";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Provider } from "react-redux";
import Store from "./redux/store";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function App() {
  return (
    <Provider store={Store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Container maxWidth="md">
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/incident/:incidentId" component={Incident} />
          </Router>
        </Container>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;
