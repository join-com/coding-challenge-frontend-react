import React, { Component } from 'react';

class Describe extends Component {
	render() {
		const [data] = this.props.data;
		console.log(this.props)
		let { title, description, address, occuredat, media = {}, type } = data;

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
// export default function DescribeWithErrorBoundary(props) {
// 	return (
// 		<ErrorBoundary>
// 			<Describe {...props} />
// 		</ErrorBoundary>
// 	)
// };