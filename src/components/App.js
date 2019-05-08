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
            error: false
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onSearchSubmit = (args) => {
        this.setState({ loading: true, incidents: [] });
        Object.keys(args).forEach((key) => (args[key] === "" || key === "fromValid" || key === "toValid" || key === "proximityValid") && delete args[key]);
        axios.get('https://bikewise.org:443/api/v2/incidents?per_page=100000&incident_type=theft', {
            params: args
        }).then(response => this.setState({ incidents: response.data.incidents, results: [], loading: false, error: false })
        ).catch(error => {
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

    searchItem = (item) => {
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
        <div>
            <Segment>
                <Dimmer active >
                    <Loader content='Fetching results...' />
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' className="fetch" />
            </Segment>
        </div>
    );

    render() {
        const { incidents, results, loading, pageOfItems, showIncidentModal, bikeDetails, error } = this.state;
        return (<div>
            <Header />
            <div className="ui container">
                <Search onSubmit={this.onSearchSubmit} />
                {incidents.length ? <div className="count item"><input id="filter" type="search" placeholder="Search by title." onChange={this.filterResults} />
                    <div className="ui label " style={{ float: 'right' }}>
                        Total Thefts:
                    <div className="detail">{results.length ? results.length : incidents.length} </div>
                    </div>
                </div> : null}
                {error ? <Error /> :
                    <div >{loading ? this.loaderSpinner() : <IncidentList incidents results itemsPerPage={pageOfItems} onItemClick={this.searchItem} />}  </div>
                }
                {showIncidentModal ?
                    <IncidentModal onToggle={this.modalToggled} isOpen={showIncidentModal} bikeDetails={bikeDetails} /> :
                    null
                }

                <div>
                    <div className="container">
                        <div className="text-center">
                            {pageOfItems.map(item =>
                                <div key={item.id}>{item.name}</div>
                            )}
                            {loading && !error ? null :
                                <Pagination items={results.length ? results : incidents} onChangePage={this.onChangePage} />
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