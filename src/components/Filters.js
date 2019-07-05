import React from 'react';
import Dateutil from './Dateutil';

const Filters = (props) => {
	const { occurred_after, occurred_before, incident_type, query } = props.qparams;
	const [beforeDate, setBeforeDate] = React.useState(Dateutil.getDatePickerFormat(occurred_before));
	const [afterDate, setAfterDate] = React.useState(Dateutil.getDatePickerFormat(occurred_after));
	const [incident, setIncident] = React.useState(incident_type);
	const filterSubmit = (e) => {
		e.persist();
		e.preventDefault();
		props.handleSubmit({
			occurred_after: afterDate, occurred_before: beforeDate, incident_type: incident, query: e.target.query.value
		})
	}
	return (
		<form className="row" onSubmit={filterSubmit}>
			<fieldset>
				<legend>Sort by</legend>

				<div className="input-field">
					<input name="query" type="search" />
					<div>
						<label htmlFor="occurred_after"><strong>From</strong></label>
						<input name="occurred_after" type="date" value={afterDate} onChange={
							e => setAfterDate(e.target.value)
						}></input>
					</div>
					<div>
						<label htmlFor="occurred_before"><strong>To</strong></label>
						<input name="occurred_before" type="date" value={beforeDate} onChange={
							e => setBeforeDate(e.target.value)
						}></input>
					</div>
				</div>
				<select value={incident} onChange={e => setIncident(e.target.value)}>
					<option value="crash">Crash</option>
					<option value="hazrd">Hazard</option>
					<option value="theft">Theft</option>
					<option value="unconfirmed">Unconfirmed</option>
					<option value="infrastructure_issue">Infrastructure issue</option>
					<option value="chop_shop">Chop shop</option>
				</select>
			</fieldset>
			<button type="submit">Apply</button>
		</form>
	);
};

export default Filters;
