import React from 'react';
import Status from './Status';

function Loader(Component) {
	return class extends React.Component {
		static defaultProps = {
			status: Status.LOADING,
		}
		render() {
			let { status, ...props } = this.props;
			if (status === Status.ERROR) {
				return <p>Opps, an error occurred</p>;
			} else if (status === Status.FAILURE) {
				return <p>No data found.</p>;
			} else if (status === Status.SUCCESS) {
				return <Component {...props} />;
			} else {
				return <p>{status} Fetching incident(s). Please wait...</p>;
			}

		}
	}
}


export default Loader;