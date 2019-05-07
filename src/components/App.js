import React, { Component } from 'react';
import axios from "axios";
import Header from './Header';
import Search from "./Search";
import IncidentList from "./IncidentList";

class App extends Component {

    constructor() {
        super();
        this.state = { incidents: [] };
    }

    onSearchSubmit = (args) => {
        console.log("Case from App args", Object.keys(args));
        this.setState({ incidents: [] });

        Object.keys(args).forEach((key) => (args[key] === "") && delete args[key]);
        axios.get('https://bikewise.org:443/api/v2/incidents?per_page=100&incident_type=theft', {
            params: args
        }).then(response => this.setState({ incidents: response.data.incidents })
        ).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (<div>
            <Header />
            <div className="ui container">
                <Search onSubmit={this.onSearchSubmit} />
                <IncidentList incidents={this.state.incidents} />}  </div>

        </div>
        );
    }
}

export default App;