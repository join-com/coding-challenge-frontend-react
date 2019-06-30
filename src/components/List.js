import React from 'react';

const List = (props) => {
	const { incidents } = props.bikes;
	if (!incidents.length) return (<p>No data found!</p>);
	return (
		<ul>
			{incidents.map((bike) => {
				let { id, title, url, description, address, occured_at, media, type, source } = bike;
				return (
					<li key={id}>
						<h3><a href={url}>{title}</a></h3>
						<img src={media.image_url_thumb} alt={description}></img>
						<dl>
							<dt>Location:</dt>
							<dd>{address}</dd>
							<dt>{type}: </dt>
							<dd>{new Date(occured_at * 1000).toLocaleDateString()}</dd>
						</dl>
						<i>Source: <a href={source.html_url}>{source.name}</a></i>
					</li>
				)
			})}
		</ul>
	)

}
export default List;