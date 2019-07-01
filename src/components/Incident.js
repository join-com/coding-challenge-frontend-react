import React from 'react';
import { Link } from "@reach/router";
import fallback from "assets/fallback.svg";
// import { Precode } from "../utils/"

const Incident = (props) => {
	let { id, title, description, address, occuredat, media = {}, type, source = {} } = props;
	return (
		<li className="card-panel" key={id}>
			<h3><Link to={`./${id}`}>{title}</Link></h3>
			<img src={media.image_url_thumb ? media.image_url_thumb : fallback} alt={description}></img>
			{/* <img ></img> */}
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