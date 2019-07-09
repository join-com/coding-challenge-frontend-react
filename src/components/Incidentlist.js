import React from 'react';
import Incident from "./Incident";

class Incidentlist extends React.Component {
	state = {
		incidents: []
	}
	static defaultProps = {
		fetcherID: 1
	}
	componentDidUpdate(prevProps) {
		if (prevProps.fetcherID !== this.props.fetcherID) {
			console.log(this.props.data);
			this.setState({ incidents: [...this.state.incidents, ...prevProps.data] }, () => {
				console.log(this.state.incidents)
			});
		}
	}
	componentDidMount() {

		this.setState({
			incidents: this.props.data
		})
	}
	render() {
		const data = this.state.incidents;
		return (
			<div className="card-body">
				{data.map((info) => {
					let { id, title, description, address, occurred_at, media, type, source } = info;
					return (
						<Incident
							key={id}
							id={id}
							title={title}
							description={description}
							address={address}
							occurredat={occurred_at}
							media={media}
							type={type}
							source={source} />
					)
				})}
			</div>
		)
	}
}

export default Incidentlist;