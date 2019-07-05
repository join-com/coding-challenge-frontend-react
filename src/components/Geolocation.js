import React from 'react';

class Geolocation extends React.Component {
	elemMap = React.createRef();
	componentDidMount() {
		this.addScript();
	}
	initMap() {
		const google = window.google;
		let maps = this.props.data || [],
			mapdata = maps[0] || {};
		let [lng, lat] = mapdata.geometry.coordinates;
		let latLng = { lat: lat, lng: lng };
		let map = new google.maps.Map(this.elemMap.current, {
			zoom: 6,
			center: latLng,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		});
		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			title: mapdata.properties["title"]
		});
	}
	addScript() {
		let script = document.getElementById('GoogleAPI$Script$Map');
		if (!script) {
			let script = document.createElement('script');
			script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAeIUZEGL5vfKB12rz9AstWgnbOyTP3Fl8";
			script.id = 'GoogleAPI$Script$Map';
			script.onload = () => {
				this.initMap()
			}
			document.body.appendChild(script);
		}
	}
	render() {
		console.log(this.props)
		return (
			<div id="map" className="map-row" ref={this.elemMap}></div>
		);
	}
}

export default Geolocation;