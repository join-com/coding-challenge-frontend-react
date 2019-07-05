import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Describe from "./components/Describe";

import Bikevexapi from "./components/Bikevexapi";
import ErrorBoundary from "./components/ErrorBoundary";



class Details extends React.Component {
	req = Bikevexapi.incident;
	withDescriber = Loader(Describe);

	render() {
		console.log(this.props)
		let req = this.req,
			uri = `${req.path}/${this.props.id}`;
		const Describer = this.withDescriber;
		return (
			<ErrorBoundary>
				<Fetcher path={uri} name={req.name}>
					{(props) => {
						return ((props) ? <Describer {...props} /> : null);
					}}
				</Fetcher>
			</ErrorBoundary >
		);
	}
}

export default Details;