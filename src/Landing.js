import React from "react";
import { Link } from "@reach/router";
import 'styles/landingpage.css';

const Landing = () => {
	return (
		<React.Fragment>
			<div className="jumbotron hero">
				<div className="container">
					<div className="row">
						<div className="col-md-4 phone-preview"></div>
						<div className="col-md-6 get-it">
							<h1>Find your bike</h1>
							<p>
								Bikevex community and its partners, you have the information
								necessary to recover your lost or stolen bike at no cost to you.
								Its what we do.
              				</p>
							<p>
								<Link to="/incidents" className="btn btn-primary btn-lg">Search bikes</Link>

							</p>
						</div>
					</div>
				</div>
			</div>
			<section className="testimonials">
				<h2 className="text-center">People Love It!</h2>
				<blockquote className="blockquote">
					<p>
						A user or partner encounters your bike, uses Bikevex to identify it,
            and contacts you.{" "}
					</p>
					<footer className="blockquote-footer">join.com </footer>
				</blockquote>
			</section>
		</React.Fragment>
	);
};

export default Landing;
