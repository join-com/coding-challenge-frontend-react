import React, { Component } from 'react';
import axios from "axios";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Header from './Header';
import Search from "./Search";
import IncidentList from "./IncidentList";
import Pagination from "./Pagination";
import IncidentModal from './IncidentModal';
import Error from './Error';

import "../assets/style/style.css";

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
            error: false,
            noResults: false,
            filterOn: false,
            firstSearch: true
        };
        this.onChangePage = this.onChangePage.bind(this);
    }


    onSearchSubmit = (args) => {
        this.setState({ loading: true, incidents: [], pageOfItems: [], noResults: false, filterOn: false, firstSearch: false });
        Object.keys(args).forEach((key) => (args[key] === "" || key === "fromValid" || key === "toValid" || key === "proximityValid") && delete args[key]);
        axios.get('https://bikewise.org:443/api/v2/incidents?per_page=100000&incident_type=theft', {
            params: args
        }).then(response => {
            if (!response.data.incidents.length) {
                this.setState({ noResults: true })
            }
            this.setState({ incidents: response.data.incidents, pageOfItems: response.data.incidents, results: [], loading: false, error: false });
        }).catch(error => {
            this.setState({ loading: false, error: true });
        });

    };

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    };

    filterResults = (e) => {
        let tempIncidents = this.state.incidents.filter(x => x.title.toLowerCase().match(e.target.value.toLowerCase().trim()));
        this.setState({ results: tempIncidents }, () => {
            !this.state.results.length ? this.setState({ noResults: true }) : this.setState({ noResults: false, filterOn: true, pageOfItems: tempIncidents })
        });

    };

    searchItem = (item) => {
        this.setState({ loadingModal: true });
        let url = item.source.api_url;
        axios.get(url).then(response => this.setState({
            bikeDetails: response.data.bikes, showIncidentModal: !this.state.showIncidentModal, loadingModal: false
        })
        ).catch(error => {
            this.setState({ error: true });
        });
    };

    modalToggled = (toggleFlag) => {
        this.setState({ showIncidentModal: toggleFlag })
    };

    loaderSpinner = () => (
        <div id="loader-spinner">
            <Segment>
                <Dimmer active >
                    <Loader content='Fetching results...' />
                </Dimmer>
            </Segment>
        </div>
    );

    render() {
        const { incidents, results, loading, pageOfItems, showIncidentModal, firstSearch, bikeDetails, error, noResults, filterOn, loadingModal } = this.state;
        return (<div>
            <div className={loadingModal ? 'loading' : 'hide-loading'}>Loading&#8230;</div>
            <Header />
            <div className={firstSearch ? "ui container search-wrapper" : "ui container"} >
                <Search onSubmit={this.onSearchSubmit} />

                {incidents.length ? <div className="count item"><input id="filter" type="search" placeholder="Search by title." onChange={this.filterResults} />
                    <div className="ui label " style={{ float: 'right' }}>
                        Total Thefts:
                    <div className="detail">{filterOn ? results.length : incidents.length} </div>
                    </div>
                </div> : null}
                {(this.state.noResults) &&
                    <div className="ui segment" id="no-result">No results found for the selected criteria!</div>

                }
                {error ? <Error /> :
                    <div>{loading ? this.loaderSpinner() :
                        <IncidentList itemsPerPage={pageOfItems} onItemClick={this.searchItem} />
                    }
                    </div>
                }

                {showIncidentModal ?
                    <IncidentModal onToggle={this.modalToggled} isOpen={showIncidentModal} bikeDetails={bikeDetails} /> : null
                }
                <div>
                    <div className="container">
                        <div className="text-center">
                            {pageOfItems.map(item =>
                                <div key={item.id}>{item.name}</div>
                            )}
                            {loading && !error ? null :
                                <Pagination items={filterOn ? results : incidents} onChangePage={this.onChangePage} />
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