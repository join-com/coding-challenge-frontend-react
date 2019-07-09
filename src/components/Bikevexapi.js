const API = "https://bikewise.org/api/v2";

const Bikevexapi = {
	locations: {
		path: `${API}/locations`,
		name: "features",
		qparams: {
			"occurred_before": 0,
			"occurred_after": 1,
			"incident_type": "",
			"proximity": "",
			"proximity_square": 100,
			"query": "",
			"limit": 100,
			"all": false
		}
	},
	markers: {
		path: `${API}/locations/markers`,
		name: "features",
		qparams: {
			"occurred_before": 0,
			"occurred_after": 1,
			"incident_type": "",
			"proximity": "",
			"proximity_square": 100,
			"query": "",
			"limit": 100,
			"all": false
		}
	},
	incidents: {
		path: `${API}/incidents`,
		name: "incidents",
		qparams: {
			"page": 1,
			"per_page": 2,
			"occurred_before": 0,
			"occurred_after": 0,
			"incident_type": "",
			"proximity": "",
			"proximity_square": 100,
			"query": ""
		}
	},
	incident: {
		path: `${API}/incidents/`,
		name: "incident"
	}
}

export default Bikevexapi;