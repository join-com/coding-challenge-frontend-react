import React, { Component } from 'react';
import Fetcher from './Fetcher';
import Geolocation from './Geolocation';
import Bikevexapi from "./Bikevexapi";

class Describe extends Component {
	render() {
		const [data] = this.props.data;
		const { path, name } = Bikevexapi.markers;
		let { title, description, address, occuredat, source = {}, type } = data;
		return (
			<div className="col">
				<div className="card or-card">
					<div className="card-body">
						<h4 className="card-title">{title}</h4>
						<h6 className="card-subtitle">
							{occuredat}:{type}
						</h6>
						<p className="card-text">{description}</p>
						<small>
							<i>	Source: <a href={source.html_url}>{source.name}</a></i>
						</small>
						<div className="row o-row">
							<div className="col-lg-8">
								<Fetcher path={path} name={name} {...data}>
									{props => {
										console.log(props);
										return (
											(props && props.data) ? (<div className="border border-primary"><Geolocation {...props}></Geolocation></div>) : (null)
										)
									}}
								</Fetcher>
							</div>
							<div className="col">{address}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Describe;