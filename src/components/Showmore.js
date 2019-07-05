import React from 'react';
import { Link } from '@reach/router';
import Bikevexquery from './Bikevexquery';

class Showmore extends React.Component {
	state = {
		page: 1,
		count: 2,
		query: ""
	}
	static defaultProps = {
		perPage: 2
	}
	getQuery(page) {
		return Bikevexquery({
			page: page,
			name: this.props.name
		})
	}
	showmore() {
		let { count, page } = this.state,
			ncount = count + this.props.perPage,
			newPage = page + 1,
			newQuery = this.getQuery(newPage);
		this.setState({
			count: ncount,
			page: newPage,
			query: newQuery
		}, () => {
			this.props.handleShowmore({ pageID: newPage, query: newQuery });
		})
	}

	componentDidMount() {
		this.showmore();
	}
	render() {
		return (this.props.name) ? (
			<Link to={this.state.query} onClick={this.showmore.bind(this)}>Next {this.props.perPage} incidents</Link>
		) : null;
	}
}
export default Showmore;