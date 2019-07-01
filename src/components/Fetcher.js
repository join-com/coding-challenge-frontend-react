import React from 'react';
import Status from './Status';

class Fetcher extends React.Component {
	state = {
		data: null,
		code: null
	}
	static defaultProps = {
		method: "GET"
	}
	getHttpRequest(method) {
		switch (method) {
			case "GET":
				return { method, headers: { Accept: "application/json" } }
			default:
				return { method };
		}
	}
	componentWillUnmount() {
		console.log("status")
	}


	componentDidMount() {
		this.setState({ code: Status.LOADING });
		let req = this.getHttpRequest(this.props.method);
		console.log(this.props.path)
		fetch(this.props.path, req)
			.then(response => {
				let responseJson = response.json();
				if (response.status !== 200) {
					this.setState({ code: Status.FAILURE, data: responseJson })
					return;
				}
				return responseJson;
			})
			.then((responseJson) => {
				console.log("s--");
				return this.setState({ code: Status.SUCCESS, data: responseJson })
			}
			)
			.catch((error) => {
				console.log("e--");
				this.setState({ code: Status.ERROR })
			})
	}
	render() {
		return this.props.children(this.state);
	}
}

export default Fetcher;