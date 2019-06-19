import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Styled from "styled-components";
import FinderBar from "./components/FinderBar";
import history from "./History";
import Case from "./views/Case";
import Error from "./views/Error";
import Search from "./views/Search";

interface IApp {
  className?: string;
  nightMode?: boolean;
}

const App: React.FC<IApp> = ({ className, nightMode = false }) =>
<div className={`${className} ${nightMode ? "nm" : ""}`}>
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
</div>;

const mapStateToProps = (state: any) => ({
  nightMode: state.theme.nightMode,
});

const styledApp = Styled(App)`
  margin: auto;
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${(props: any) => props.nightMode ? "rgba(0,0,0, 0.87)" : "#fff"};
  color: ${(props: any) => props.nightMode ? "#fff" : "rgba(0,0,0, 0.87)"};
  @media (max-width: 500px) {
    flex-direction: column;
    overflow: scroll;
  }
  .page {
    flex: 5;
  }
`;

export default connect(mapStateToProps)(styledApp);
