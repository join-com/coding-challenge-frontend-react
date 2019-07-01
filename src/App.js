import React from 'react';
import ReactDOM from 'react-dom';
import Bikevex from './Bikevex';
import 'styles/app.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	return (
		<div>
			<Header></Header>
			<div>
				<h1>Find your bike</h1>
				<p>Hero image</p>
			</div>
			<Bikevex />
			<Footer></Footer>
		</div>


	);
};



ReactDOM.render(<App />, document.querySelector("#root"));