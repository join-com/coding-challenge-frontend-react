import React, { Component } from 'react';

class Describe extends Component {
	render() {
		let { id, title, uri, description, address, occuredat, media = {}, type, source = {} } = this.props;
		return (
			<div>
				<h1>
					<strong>{type}</strong>
					{occuredat}
					{title}
				</h1>
				<div>
					<img src={media.image_url} alt={title} />
				</div>
				{description}
				{address}

			</div>
		);
	}
}

export default Describe;