import React from 'react';
import { Link } from "@reach/router";
import fallback from "assets/fallback.svg";
// import { Precode } from "../utils/"

const Incident = (props) => {
	let { id, title, description, address, occuredat, media = {}, type, source = {} } = props;
	return (
		<li className="row around-xs" key={id}>
			<div className="col-xs-3">
				<div className="box">
					<img src={media.image_url_thumb ? media.image_url_thumb : fallback} alt={description}></img>
				</div>
			</div>
			<div className="col-xs-9">
				<div className="col">
					{" "}
					<div className="box">
						<Link to={`./${id}`}>{title}</Link>
					</div>
					<p className="box">{description}</p>
					<p className="box">
						{new Date(occuredat * 1000).toLocaleDateString()} {address},
          			</p>
					<div className="box">
						<i>
							source: <a href={source.html_url}>{source.name}</a>
						</i>
					</div>
				</div>
			</div>
		</li>

	)
}
export default Incident;