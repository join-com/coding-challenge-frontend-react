import React from 'react';

const Filters = () => {
	return (

		<form className="row">
			<fieldset>
				<legend>Sort by</legend>
				<div className="row">
					<div className="input-field">
						<input type="radio" name="sort-method" id="most-recent" />
						<label htmlFor="most-recent">most recent</label>
					</div>
				</div>
				<div className="input-field">
					<input type="radio" name="sort-method" id="near-by" />
					<label htmlFor="near-by">near by</label>
				</div>
			</fieldset>
			<button type="submit">apply</button>
		</form>
	);
};

export default Filters;