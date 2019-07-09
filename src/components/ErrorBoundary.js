import React from 'react';
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
	state = { hasError: false };
	static getDerivedStateFromError() {
		return { hasError: true }
	}
	componentDidCatch(error, info) {
		console.error("Error here...", error);
		console.info("Error here...", info);
	}
	render() {
		if (this.state.hasError) {
			return (
				<h2>
					Opps, an error occured. <Link to="/">Click here</Link> to back to the home page.
				</h2>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;