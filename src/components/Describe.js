import React, { Component } from 'react';
import Fetcher from './Fetcher';
import Geolocation from './Geolocation';
import Bikevexapi from "./Bikevexapi";

class Describe extends Component {
	render() {
		const [data] = this.props.data;
		const { path, name } = Bikevexapi.markers;
		let { title, description, address, occuredat, media = {}, source = {}, type } = data;
		return (
			<div>
				<h1>
					<strong>{type}</strong>
					{occuredat}
					{title}
				</h1>
				<div>
					<img src={media.image_url} alt={title} />
				</div>
				{description}
				<div>Source: <a href={source.html_url}>{source.name}</a>
				</div>
				<Fetcher path={path} name={name} {...data}>
					{props => {
						console.log(props);
						return (
							(props && props.data) ? (<Geolocation {...props}></Geolocation>) : (null)
						)
					}}
				</Fetcher>

				{address}
			</div>
		);
	}
}

export default Describe;