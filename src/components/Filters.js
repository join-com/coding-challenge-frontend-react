import React from 'react';
import Dateutil from './Dateutil';

const Filters = (props) => {
	const { occurred_after, occurred_before, incident_type, query } = props.qparams;
	const filterSubmit = (e) => {
		e.persist();
		e.preventDefault();
		console.log(e.target['incident_type'].value);
		props.handleSubmit({
			"occurred_after": e.target.occurred_after.value,
			"occurred_before": e.target.occurred_before.value,
			"incident_type": e.target.incident_type.value,
			"query": encodeURIComponent(e.target.query.value)
		})
	};
	return (
		<form onSubmit={filterSubmit}>
			<div className="form-group">
				<label htmlFor="query"><strong>Query</strong></label>
				<input className="form-control" defaultValue={query} name="query" type="search" />
			</div>
			<div className="form-group">
				<label htmlFor="occurred_after"><strong>From</strong></label>
				<input className="form-control" name="occurred_after" type="date" defaultValue={occurred_after}></input>
			</div>
			<div className="form-group">
				<label htmlFor="occurred_before"><strong>To</strong></label>
				<input className="form-control" name="occurred_before" type="date" defaultValue={occurred_before}></input>
			</div>
			<div className="form-group">
				<label htmlFor="incident_type"><strong>Incident types</strong></label>
				<select className="form-control" name="incident_type" defaultValue={incident_type}>
					<option value="crash">Crash</option>
					<option value="hazrd">Hazard</option>
					<option value="theft">Theft</option>
					<option value="unconfirmed">Unconfirmed</option>
					<option value="infrastructure_issue">Infrastructure issue</option>
					<option value="chop_shop">Chop shop</option>
				</select>
			</div>
			<button className="btn btn-primary" type="submit">Apply</button>
		</form >
	);
};

export default Filters;
