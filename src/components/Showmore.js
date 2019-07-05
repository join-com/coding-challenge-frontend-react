import React from 'react';
import { Link } from '@reach/router';
import Bikevexquery from './Bikevexquery';

class Showmore extends React.Component {
	state = {
		page: 1,
		count: 1,
		query: ""
	}
	static defaultProps = {
		perPage: 1
	}

	showmore() {
		let { count, page } = this.state,
			ncount = count + this.props.perPage,
			newPage = page + 1
		this.setState({
			count: ncount,
			page: newPage
		}, () => {
			this.props.handleShowmore({ pageID: newPage });
		})
	}

	componentDidMount() {
		this.showmore();
	}
	render() {
		return (this.props.name) ? (
			<Link to={this.props.query} onClick={this.showmore.bind(this)}>Next {this.props.perPage} incidents</Link>
		) : null;
	}
}
export default Showmore;