export const getIncidents = () => (
  fetch(`https://bikewise.org/api/v2/incidents?incident_type=theft&page=1&per_page=1000&proximity=USA`)
)