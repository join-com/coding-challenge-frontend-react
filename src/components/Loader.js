import React from 'react';
import Status from './Status';

function Loader(Component) {
	/*eslint-disable react/display-name */
	return class extends React.Component {
		static defaultProps = {
			code: Status.LOADING,
		}
		render() {
			let { code, ...props } = this.props;
			if (code === Status.ERROR) {
				return <p>Opps, an error occurred.</p>;
			} else if (code === Status.FAILURE) {
				return <p>No data found.</p>;
			} else if (code === Status.SUCCESS) {
				return <Component {...props} />;
			} else {
				return <p>Fetching incident(s). Please wait...</p>;
			}

		}
	}
}

export default Loader;