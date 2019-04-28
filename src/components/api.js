
import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from "../utils/index";


const incidentApi = BASE_URL + API_ENDPOINTS.Incidents;
const getMarkersApi = BASE_URL + API_ENDPOINTS.Locations;
const bikeUrl = "https://bikeindex.org/api/v1/bikes/"

const callIncidents = async (searchValue, fromDate, toDate, proximity, proximityRadius) => {
    let responseFromIncidentApi = [];
    let responseFromLocationApi = [];
    const params = {
                query: searchValue,
                incident_type: "theft",
                proximity: proximity,
                proximity_square: proximityRadius,
                ...(fromDate ? { occurred_before: fromDate } : {}),
                ...(toDate ? { occurred_before: toDate } : {})
       }

    let getIncidentApi = axios.get(incidentApi,{params});
    let getMarkerApi = axios.get(getMarkersApi,{params});

    let fromIncidentApi = await getIncidentApi;
    let fromLocationApi = await getMarkerApi;

    responseFromIncidentApi  = fromIncidentApi.data.incidents;
    responseFromLocationApi  = fromLocationApi.data.features;

    let finaArrayWithMarkers = responseFromIncidentApi.map(a => Object.assign(a, responseFromLocationApi.find(b => b.properties.id === a.id)));
    return finaArrayWithMarkers;
}

const getBikeInfo =  async (id) => {
    let getBikeData = axios.get(`${bikeUrl}${id}`);
    let getDataFromBikeAPI = await getBikeData;
    console.log(getDataFromBikeAPI.data.bikes);
    return getDataFromBikeAPI.data.bikes;
}

export { callIncidents, getBikeInfo };