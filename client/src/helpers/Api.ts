import Axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, CancelTokenSource } from 'axios';
import Case from '../models/Case';

const config: AxiosRequestConfig = {
    baseURL: 'https://bikewise.org:443/api/v2/',
    responseType: 'json',
}

const axiosCaseFetcher: AxiosInstance = Axios.create(config)
export const fetchAllCasesSource: CancelTokenSource = Axios.CancelToken.source();

interface CaseResponse {
    incidents: Case[]
}

interface ApiResponse<T> extends AxiosResponse<T>{
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
}

export const fetchAllCases = async () => {
   const theftCase:ApiResponse<CaseResponse> = await axiosCaseFetcher.request<CaseResponse>({
     url: '/incidents',
     method: 'get',
     cancelToken: fetchAllCasesSource.token
   });
   console.log(theftCase.data.incidents[0]);
   return theftCase.data.incidents;
}