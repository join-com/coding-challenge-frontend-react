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
		console.log(this.props.fetcherID)
		return (
			<ul>
				{data.map((info) => {
					let { id, title, description, address, occured_at, media, type, source } = info;
					return (
						<Incident
							key={id}
							id={id}
							title={title}
							description={description}
							address={address}
							occuredat={occured_at}
							media={media}
							type={type}
							source={source} />
					)
				})}
			</ul>
		)
	}
}

export default Incidentlist;