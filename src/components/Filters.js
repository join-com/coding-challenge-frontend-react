import React from 'react';
import Searchincident from './Searchincident';
import Daterange from './Daterange';

const Filters = () => {
	return (
		<form className="row">
			<fieldset>
				<legend>Sort by</legend>

				<div className="input-field">
					<Searchincident></Searchincident>
					<Daterange></Daterange>
				</div>
				<input type="radio" name="incident_type" value="crash" id="crash" />
				<label htmlFor="crash">Crash</label>

				<input type="radio" name="incident_type" value="hazrd" id="hazrd" />
				<label htmlFor="hazrd">Hazard</label>

				<input type="radio" name="incident_type" value="theft" id="theft" />
				<label htmlFor="theft">Theft</label>

				<input type="radio" name="incident_type" value="unconfirmed" id="unconfirmed" />
				<label htmlFor="">Unconfirmed</label>

				<input type="radio" name="incident_type" value="infrastructure_issue" id="infrastureissue" />
				<label htmlFor="infrastureissue">Infrastructure issue</label>

				<input type="radio" name="incident_type" value="chop_shop" id="chopshop" />
				<label htmlFor="chopshop">Chop shop</label>
			</fieldset>
			<button type="submit" value="Apply">apply</button>
		</form>
	);
};

export default Filters;