import React from 'react';
import Incidents from './Incidents';
import { Router } from "@reach/router";
import Details from "./Details";
import Landing from "./Landing";

const Bikevex = () => {
	return (
		<main>
			<Router>
				<Landing path="/"></Landing>
				<Incidents path="incidents" />
				<Details path="incidents/:id" />
			</Router>
		</main>
	)
}

export default Bikevex;