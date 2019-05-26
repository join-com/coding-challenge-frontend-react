import axios from 'axios';
import queryString from 'query-string';
import * as _ from 'lodash';

import { ApiList, Incident } from '../interfaces';
import { StateQueryFilter } from '../containers/AppListIncidents/state/types';


const API_BASE = `https://bikewise.org/api/v2`;


const calls: {[key: string]: any} = {};


export const fetchIncidents = (filter?: StateQueryFilter): Promise<ApiList<Incident[]>> => {
    if (calls.fetchIncidents) {
      calls.fetchIncidents.cancel('Only one request allowed at a time.');
    }

    calls.fetchIncidents = axios.CancelToken.source();

    return axios({
        method: 'get',
        url: `${API_BASE}/incidents?${filter ? queryString.stringify(filter) : ''}`,
        cancelToken: calls.fetchIncidents.token,
    }).then((res: { data: { incidents: Incident[] } }): any => ({
        pagination: {
            page: _.get(filter, ['page'], 1),
            page_size: _.get(filter, ['per_page'], 10),
            total_items: 105,
            total_pages: Math.ceil( 105 / _.get(filter, ['per_page'], 10) ),
        },
        collection: res.data.incidents,
    }));
};


export const getIncidentById = (id: number): Promise<Incident> => {
    const call = `getIncidentById/${id}`;

    if (calls[call]) {
      calls[call].cancel('Previous unfinished identical request cancelled.');
    }

    calls[call] = axios.CancelToken.source();

    return axios({
        method: 'get',
        url: `${API_BASE}/incidents/${id}`,
        cancelToken: calls[call].token,
    }).then((res: { data: { incident: Incident } }) => res.data.incident);
};
