import React from 'react';
import { Router, Link } from "@reach/router";
import Incident from "./Incident";

const Incidentlist = (props) => {
	const { bikes } = props;
	if (!bikes.incidents.length) return (<p>No data found!</p>);

	return (
		<ul>
			{bikes.incidents.map((data) => {
				let { id, title, description, address, occured_at, media, type, source } = data;
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
export default Incidentlist;