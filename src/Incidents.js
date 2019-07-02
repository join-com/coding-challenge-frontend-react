import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Incidentlist from "./components/Incidentlist";
import Bikevexapi from "./components/Bikevexapi";

import ErrorBoundary from "./components/ErrorBoundary";
import Filters from "./components/Filters";

// bikevex/src/components/Incident.js
class Incidents extends React.Component {
	render() {
		let req = Bikevexapi.incidents;
		req.path = Bikevexapi.incidents.path + this.props.location.search;
		let Bikes = Loader(Incidentlist);
		return (
			<ErrorBoundary>
				<Filters></Filters>
				<Fetcher {...req}>
					{props => {
						return <Bikes {...props} />
					}}
				</Fetcher>
			</ErrorBoundary>
		);
	}
}

export default Incidents;