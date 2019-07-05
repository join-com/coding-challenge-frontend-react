import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Incidentlist from "./components/Incidentlist";
import Bikevexapi from "./components/Bikevexapi";

import ErrorBoundary from "./components/ErrorBoundary";
import Filters from "./components/Filters";
import Showmore from "./components/Showmore";
import Bikevexquery from "./components/Bikevexquery";

// bikevex/src/components/Incident.js
class Incidents extends React.Component {
	state = {
		reqID: 1,
		req: Bikevexapi.incidents,
		query: ""
	}
	payload = Bikevexapi.incidents;
	withIncidents = Loader(Incidentlist);
	onShowmore(data) {
		this.setState({
			reqID: data.pageID
		});
	}
	componentDidMount() {
		this.setState({
			query: Bikevexquery(this.state.req)
		});
	}

	handleSubmit = (data) => {
		this.setState(({
			req: {
				...this.state.req,
				qparams: {
					page: this.state.page,
					...this.state.req.qparams,
					...data
				}
			}
		}), () => {
			//let query = Bikevexquery(this.state.req);
			this.setState({
				query: Bikevexquery(this.state.req)
			})
		})
	}

	render() {
		let Incidentlist = this.withIncidents;
		return (
			<ErrorBoundary>
				<Filters handleSubmit={this.handleSubmit} {...this.state.req}></Filters>
				<Fetcher fetcherID={this.state.reqID} query={this.state.query} {...this.state.req}>
					{props => {
						return <Incidentlist {...props} />
					}}
				</Fetcher>
				<Showmore name="incidents" query={this.state.query} handleShowmore={this.onShowmore.bind(this)}></Showmore>
			</ErrorBoundary >
		);
	}
}

export default Incidents;