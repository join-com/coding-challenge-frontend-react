import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Describe from "./components/Describe";

import Bikevexapi from "./components/Bikevexapi";
import ErrorBoundary from "./components/ErrorBoundary";


class Details extends React.Component {

	render() {
		console.log(this.props)
		let req = Bikevexapi.incident;
		let IncidentDetails = Loader(Describe);
		let uri = `${req.path}/${this.props.id}`;
		req.path = uri;
		return (
			<ErrorBoundary>
				<Fetcher fetcherID={this.props.id} {...req}>
					{(props) => {
						return (<IncidentDetails {...props} />);
					}}
				</Fetcher>
			</ErrorBoundary >
		);
	}
}

export default Details;