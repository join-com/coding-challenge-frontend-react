import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Describe from "./components/Describe";

import Bikevexapi from "./components/Bikevexapi";
import ErrorBoundary from "./components/ErrorBoundary";
import InnerHeader from "./components/InnerHeader";



class Details extends React.Component {
	req = Bikevexapi.incident;
	withDescriber = Loader(Describe);

	render() {
		let req = this.req,
			uri = `${req.path}/${this.props.id}`;
		console.log(uri)
		const Describer = this.withDescriber;
		return (
			<div className="container">
				<InnerHeader></InnerHeader>
				<ErrorBoundary>
					<Fetcher path={uri} name={req.name}>
						{(props) => {
							return ((props) ? <Describer {...props} /> : null);
						}}
					</Fetcher>
				</ErrorBoundary >
			</div>
		);
	}
}

export default Details;