import Axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, CancelTokenSource } from 'axios';
import ICase from '../models/ICase';
import IFeature from '../models/IFeature';

const config: AxiosRequestConfig = {
    baseURL: 'https://bikewise.org:443/api/v2/',
    responseType: 'json',
}

const axios: AxiosInstance = Axios.create(config)
export const fetchSourceAll: CancelTokenSource = Axios.CancelToken.source();
export const fetchSourceDetails: CancelTokenSource = Axios.CancelToken.source();


interface ICasesResponse {
    incidents: ICase[]
}

interface ApiResponse<T> extends AxiosResponse<T>{
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
}
/**
 * Description Get all theft cases from Bikewise API, it's not paginated due to API limitations
 */
export const fetchAllCases = async () => {
   const theftCases:ApiResponse<ICasesResponse> = await axios.request<ICasesResponse>({
     url: '/incidents',
     method: 'get',
     params: { proximity: 'berlin' },
     cancelToken: fetchSourceAll.token
   });
   return theftCases.data.incidents;
}
interface ICaseResponse {
    incident: ICase;
}
interface ILocationsResponse {
     features: IFeature[];
}

/**
 * Description get and return theft case details
 */
export const fetchCaseDetails = async (id: string) => {
  const theftCase:ApiResponse<ICaseResponse> = await axios.request<ICaseResponse>({
     url: `/incidents/${id}`,
     method: 'get',
     cancelToken: fetchSourceDetails.token
   });
   const { incident } = theftCase.data;
   const features: ApiResponse<ILocationsResponse> = await axios.request<ILocationsResponse>({
     url: '/locations',
     method: 'get',
     params: { query: incident.title },
     cancelToken: fetchSourceDetails.token
   });
   console.log(features);
   incident.feature = features.data.features.find(f => f.properties.id === incident.id);
   console.log(incident)
   return incident;
}