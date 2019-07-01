import React from 'react';
import Incident from "./Incident";

const Incidentlist = (props) => {
	const { data } = props;
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
export default Incidentlist;