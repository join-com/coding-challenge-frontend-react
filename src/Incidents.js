import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Incidentlist from "./components/Incidentlist";
import Bikevexapi from "./components/Bikevexapi";

import ErrorBoundary from "./components/ErrorBoundary";
import Filters from "./components/Filters";
import Showmore from "./components/Showmore";

// bikevex/src/components/Incident.js
class Incidents extends React.Component {
	state = {
		reqID: 1,
		query: ""
	}
	onShowmore(data) {
		this.setState({
			reqID: data.pageID,
			query: data.query
		});
	}
	payload = Bikevexapi.incidents;
	IncidentList = Loader(Incidentlist);


	render() {
		let IncidentList = this.IncidentList;
		return (
			<ErrorBoundary>
				<Filters></Filters>
				<Fetcher fetcherID={this.state.reqID} query={this.state.query} {...this.payload}>
					{props => {
						return <IncidentList {...props} />
					}}
				</Fetcher>
				<Showmore name="incidents" handleShowmore={this.onShowmore.bind(this)}></Showmore>
			</ErrorBoundary >
		);
	}
}

export default Incidents;