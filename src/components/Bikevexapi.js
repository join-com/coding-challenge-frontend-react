const API = "https://bikewise.org/api/v2";

const Bikevexapi = {
	locations: {
		path: `${API}/locations`,
		name: "locations"
	},
	markers: {
		path: `${API}/locations/markers`,
		name: "markers"
	},
	incidents: {
		path: `${API}/incidents`,
		name: "incidents"
	},
	incident: {
		path: `${API}/incidents/`,
		name: "incident"
	}
}

export default Bikevexapi;