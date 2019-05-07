import React, { Component } from 'react';
import axios from "axios";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Header from './Header';
import Search from "./Search";
import IncidentList from "./IncidentList";
import Pagination from "./Pagination";
import IncidentModal from './IncidentModal';
import Error from './Error';

import styles from "../assets/style/style.css";

class App extends Component {

    constructor() {
        super();
        this.state = {
            incidents: [],
            results: [],
            showIncidentModal: false,
            bikeDetails: '',
            pageOfItems: [],
            loading: false,
            loadingModal: false,
            error: false
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onSearchSubmit = (args) => {
        this.setState({ loading: true, incidents: [] });
        Object.keys(args).forEach((key) => (args[key] === "") && delete args[key]);
        axios.get('https://bikewise.org:443/api/v2/incidents?per_page=100000&incident_type=theft', {
            params: args
        }).then(response => this.setState({ incidents: response.data.incidents, results: [], loading: false, error: false })
        ).catch(error => {
            console.log(error);
            this.setState({ loading: false, error: true });
        });
    };

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    };

    filterResults = (e) => {
        console.log(e.target.value);
        let tempIncidents = this.state.incidents.filter(x => x.title.toLowerCase().includes(e.target.value.toLowerCase()));
        this.setState({ results: tempIncidents });
        console.log("Now inci", this.state.incidents);
    };

    searchItem = async (item) => {
        let url = item.source.api_url;
        const response = await axios.get(url);

        this.setState({ bikeDetails: response.data.bikes, showIncidentModal: !this.state.showIncidentModal, loadingModal: false });
        console.log("my state", this.state.bikeDetails);

    };

    itemClicked = (item) => {
        this.setState({ loadingModal: true });
        console.log("Clicked Item:", item);
        this.searchItem(item);
    };

    modalToggled = (toggleFlag) => {
        this.setState({ showIncidentModal: toggleFlag })
    };

    loaderSpinner = () => (
        <div>
            <Segment>
                <Dimmer active inverted>
                    <Loader inverted content='Fetching results...' />
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        </div>
    );

    render() {
        return (<div>
            <Header />
            <div className="ui container">
                <Search onSubmit={this.onSearchSubmit} />
                {this.state.incidents.length ? <div className="count item"><input id="filter" type="search" placeholder="Search by title." onChange={this.filterResults} />
                    <div className="ui label " style={{ float: 'right' }}>
                        Total Thefts:
                    <div className="detail">{this.state.results.length ? this.state.results.length : this.state.incidents.length} </div>
                    </div>
                </div> : null}
                {this.state.error ? <Error /> :
                    <div >{this.state.loading ? this.loaderSpinner() : <IncidentList incidents={this.state.incidents} results={this.state.results} itemsPerPage={this.state.pageOfItems} onItemClick={this.itemClicked} />}  </div>
                }
                {this.state.showIncidentModal ?
                    <IncidentModal onToggle={this.modalToggled} isOpen={this.state.showIncidentModal} bikeDetails={this.state.bikeDetails} /> :
                    null
                }
                <div>
                    <div className="container">
                        <div className="text-center">
                            {this.state.pageOfItems.map(item =>
                                <div key={item.id}>{item.name}</div>
                            )}
                            {this.state.loading && !this.state.error ? null :
                                <Pagination items={this.state.results.length ? this.state.results : this.state.incidents} onChangePage={this.onChangePage} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;