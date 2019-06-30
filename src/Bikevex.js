import React from "react";
import Fetcher from "./components/Fetcher";
import Loader from "./components/Loader";
import List from "./components/List";
import Bikevexapi from "./components/Bikevexapi";

class Bikevex extends React.Component {

	render() {
		let incidents = `${Bikevexapi.incidents}`
		let Bikes = Loader(List);
		return (
			<Fetcher path={incidents}>
				{props => {
					const { data = {}, code } = props;
					return <Bikes status={code} bikes={data} />
				}}
			</Fetcher>
		);
	}
}

export default Bikevex;