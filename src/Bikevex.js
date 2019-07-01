import React from 'react';
import Incidents from './Incidents';
import { Router } from "@reach/router";
import Details from "./Details";

const Bikevex = () => {
	return (
		<div>
			<Router>
				<Incidents path="incidents" />
				<Details path="incidents/:id" />
			</Router>
		</div>
	)
}

export default Bikevex;