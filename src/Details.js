import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import Describe from "./components/Describe";

import Bikevexapi from "./components/Bikevexapi";


class Details extends React.Component {

	render() {
		console.log(this.props)
		let uri = `${Bikevexapi.incidents}/${this.props.id}`;
		let IncidentDetails = Loader(Describe);
		return (
			<Fetcher path={uri}>
				{(props) => {
					const { data, code } = props;
					if (data) {
						console.log(data)
						const { id, title, description, address, occured_at, media, type, source } = data.incident;
						return (<Describe
							status={code}
							key={id}
							id=""
							title={title}
							description={description}
							address={address}
							occuredat={occured_at}
							media={media}
							type={type}
							source={source} />)
					} else {
						return <Describe status={code}></Describe>
					}

				}}
			</Fetcher>
		);
	}
}

export default Details;