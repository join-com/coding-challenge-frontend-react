import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import IncAppHeader from './IncAppHeader';
import AppListIncidents from '../AppListIncidents/AppListIncidents';
import AppItemIncident from '../AppItemIncident/AppItemIncident';

import { State, Actions } from '../../store';

import './App.scss';
import 'react-toastify/dist/ReactToastify.min.css';


interface IProps {

}

interface IState {

}

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div ref="win" id="win" className={this.constructor.name}>
                <ToastContainer position="bottom-right" />
                <div id="app" className="container">
                    <IncAppHeader
                        logo="/cdn/logo.png"
                        title="Police Department of Berlin"
                        subtitle="Stolen bykes"
                        />
                    <Route path="/" exact component={ () => (<Redirect to="/incidents" />) } />
                    <Route path="/incidents" exact component={ () => (<Redirect to="/incidents/page/1" />) } />
                    <Route path="/incidents/page/:page" component={ AppListIncidents } />
                    <Route path="/incidents/item/:itemId" component={ AppItemIncident } />
                </div>
            </div>
        );
    }

}

export default connect(
    (state: State) => ({
    }),
)(App);
