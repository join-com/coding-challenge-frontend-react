export const getIncidents = () => (
  fetch(`https://bikewise.org/api/v2/incidents?incident_type=theft&page=1&per_page=1000&proximity=Berlin`)
)

export const fetchIncident = id => (
  fetch(`https://bikewise.org/api/v2/incidents/${id}`)
)

export const fetchLocations = (timestamp, title) => (
  fetch(
    `https://bikewise.org/api/v2/locations?incident_type=theft&occurred_before=${timestamp}&occurred_after=${timestamp}&query=${title}`
  )
)
