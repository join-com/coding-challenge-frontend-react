import React from 'react';
import Status from './Status';

class Fetcher extends React.Component {
	state = {
		data: null,
		code: null
	}
	static displayName = "Fectcher";
	static defaultProps = {
		method: "GET",
		name: "result",
		fetcherID: 1
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
		// console.log("hello componentWillUnmount", Fetcher.displayName);
	}
	handleSetState(obj, handler) {
		let rname = this.props.name;
		const { [rname]: response } = obj.data;
		let udata = { code: obj.code, fetcherID: this.props.fetcherID };
		console.log();
		if (typeof response === 'object' && Array.isArray(response)) {
			udata["data"] = response;
		} else {
			udata["data"] = [response];
		}
		this.setState(udata);
		handler && handler();
	}

	fetchdata() {
		this.setState({ code: Status.LOADING });
		let req = this.getHttpRequest(this.props.method);
		let code = Status.LOADING;
		const { path, query = "?" } = this.props;
		let url = path + query
		fetch(url, req)
			.then((response) => {
				code = response.ok ? Status.SUCCESS : Status.FAILURE;
				return response.json()
			})
			.then((data) => {
				this.handleSetState({ code, data })
			})
			.catch((error) => {
				this.setState({ code: Status.ERROR })
				throw new Error(error.message);
			})
	}

	componentDidMount() {
		this.fetchdata();
	}

	componentDidUpdate(prevProps) {
		if (this.props.fetcherID !== prevProps.fetcherID) {
			this.fetchdata();
		}
	}
	render() {
		return this.props.children(this.state);
	}
}

export default Fetcher;