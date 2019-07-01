import React from 'react';
import { Link } from "@reach/router";
// import { Precode } from "../utils/"

const Incident = (props) => {
	let { id, title, uri, description, address, occuredat, media = {}, type, source = {} } = props;
	return (
		<li key={id}>
			<h3><Link to={`./${id}`}>{title}</Link></h3>
			<img src={media.image_url_thumb} alt={description}></img>
			<dl>
				<dt>Location:</dt>
				<dd>{address}</dd>
				<dt>{type}: </dt>
				<dd>{new Date(occuredat * 1000).toLocaleDateString()}</dd>
			</dl>
			<i>Source: <a href={source.html_url}>{source.name}</a></i>
		</li>
	)
}
export default Incident;