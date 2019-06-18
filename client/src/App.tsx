import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Styled from "styled-components";
import FinderBar from "./components/FinderBar";
import history from "./History";
import Case from "./views/Case";
import Error from "./views/Error";
import Search from "./views/Search";

interface IApp {
  className?: string;
}

const App: React.FC<IApp> = ({ className }) => {
  return (
    <div className={className}>
      <FinderBar />
      <section className="page">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/case/:id" component={Case} />
            <Route path="/404" component={() => <Error errorCode="404" errorTitle="Not Found" />} />
            <Route path="/500" component={() => <Error errorCode="500" errorTitle="Server Error" />} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Router>
      </section>
    </div>
  );
};

export default Styled(App)`
  margin: auto;
  display: flex;
  height: 100vh;
  overflow: hidden;
  .page {
    flex: 5;
  }
`;
