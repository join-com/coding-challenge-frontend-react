import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Incidentlist from "./components/Incidentlist";
import Bikevexapi from "./components/Bikevexapi";

// bikevex/src/components/Incident.js
class Incidents extends React.Component {
	render() {
		let incidents = `${Bikevexapi.incidents}`
		let Bikes = Loader(Incidentlist);
		return (
			<Fetcher path={incidents}>
				{props => {
					const { data = {}, code, } = props;
					return <Bikes status={code} bikes={data} />
				}}
			</Fetcher>
		);
	}
}

export default Incidents;