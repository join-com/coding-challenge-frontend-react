import React, { Component } from 'react';

class Daterange extends Component {
	render() {
		return (
			<div>
				<input type="date" name="occurred_before" placeholder="from"></input>
				<input type="date" name="occurred_after" placeholder="to"></input>
			</div>
		);
	}
}

export default Daterange;