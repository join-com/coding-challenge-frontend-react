import React from 'react';
import { Link } from "@reach/router";
import fallback from "assets/fallback.svg";
import Dateutil from './Dateutil';

const Incident = (props) => {
	let { id, title, description, address, occurredat, media = {}, source = {} } = props;
	return (
		<div className="row" key={id}>
			<div className="col-md-3">
				<div className="card-body">
					<img className="incident-thumb card-img" src={media.image_url_thumb ? media.image_url_thumb : fallback} alt={description}></img>
				</div>
			</div>
			<div className="col-md-9">
				<div className="card-body">
					<h5 className="card-title">
						<Link to={`./${id}`}>{title}</Link>
					</h5>
					<p className="card-text">{description}</p>
					<p className="card-text">
						{Dateutil.getDateString(occurredat)}: {address},
          			</p>
					<i>source: <a className="card-link" href={source.html_url}>{source.name}</a>
					</i>
				</div>
			</div>
		</div>
	)
}
export default Incident;