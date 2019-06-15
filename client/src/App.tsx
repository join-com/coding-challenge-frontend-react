import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Case from "./views/Case";
import Search from "./views/Search";
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={Search} />
        <Route path="/case/:id" component={Case} />
      </Router>
    </div>
  );
};

export default App;
