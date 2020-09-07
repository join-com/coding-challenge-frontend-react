import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "animate.css/animate.css";
import "./App.css";

import Navigation from "./components/navigation";
import Landing from "./components/landing";
import BikePage from "./components/bikePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/bike/:id" component={BikePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
