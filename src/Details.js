import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Describe from "./components/Describe";

import Bikevexapi from "./components/Bikevexapi";
import ErrorBoundary from "./components/ErrorBoundary";


class Details extends React.Component {

	render() {

		let req = Bikevexapi.incident;
		let IncidentDetails = Loader(Describe);
		let uri = `${req.path}/${this.props.id}`;
		return (
			<ErrorBoundary>
				<Fetcher path={uri} name={req.name}>
					{(props) => {
						// const { data, code } = props;
						// if (data) {
						// const { id, title, description, address, occured_at, media, type, source } = data[0];
						return (<IncidentDetails {...props} />);
						// } else {
						// 	return <Describe  {...props}></Describe>
						// }

					}}
				</Fetcher>
			</ErrorBoundary >
		);
	}
}

export default Details;