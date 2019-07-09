import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
	return (
		<nav>
			<div className="rlink">
				<Link className="brand" to="/">Home</Link>
				<Link className="right" to="/incidents">Incidents</Link>

			</div>
		</nav>
	);
};

export default Header;