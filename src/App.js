import React from 'react';
import ReactDOM from 'react-dom';
import Bikevex from './Bikevex';
import 'styles/app.css';

const App = () => {
	return (
		<div>
			<Bikevex />

		</div>


	);
};



ReactDOM.render(<App />, document.querySelector("#root"));