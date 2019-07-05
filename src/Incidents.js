import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Incidentlist from "./components/Incidentlist";
import Bikevexapi from "./components/Bikevexapi";

import ErrorBoundary from "./components/ErrorBoundary";
import Filters from "./components/Filters";
import Showmore from "./components/Showmore";
import Bikevexquery from "./components/Bikevexquery";
import InnerHeader from "./components/InnerHeader";

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
		console.log({ ...data })
		this.setState(({
			reqID: this.state.reqID + 1,
			req: {
				...this.state.req,
				qparams: {
					page: this.state.page,
					...this.state.req.qparams,
					...data
				}
			}
		}), () => {
			this.setState({
				query: Bikevexquery(this.state.req)
			})
		})
	}

	render() {
		let Incidentlist = this.withIncidents;
		return (
			<div className="container">
				<div className="row">
					<InnerHeader></InnerHeader>
					<ErrorBoundary>
						<Fetcher fetcherID={this.state.reqID} query={this.state.query} {...this.state.req}>
							{props => {
								return (
									<React.Fragment>
										<div className="col-md-3 col-lg-3">
											<Filters handleSubmit={this.handleSubmit} {...this.state.req}></Filters>
										</div>
										<div className="col">
											< Incidentlist {...props} />
										</div>
									</React.Fragment>
								)
							}}
						</Fetcher>
					</ErrorBoundary >
				</div>
				<div className="row">
					<div className="offset-md-3 offset-lg-3">
						{/* <Showmore name="incidents" query={this.state.query} handleShowmore={this.onShowmore.bind(this)}></Showmore> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Incidents;