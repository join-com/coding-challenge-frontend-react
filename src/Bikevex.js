import React from 'react';
import Incidents from './Incidents';
import { Router } from "@reach/router";
import Details from "./Details";

const Bikevex = () => {
	return (
		<main>
			<Router>
				<Incidents path="incidents" />
				<Details path="incidents/:id" />
			</Router>
		</main>
	)
}

export default Bikevex;