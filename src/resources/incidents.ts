import axios from 'axios';
import queryString from 'query-string';
import * as _ from 'lodash';

import * as CONFIG from '../config';
import { ApiList, Incident } from '../interfaces';
import { StateQueryFilter } from '../containers/AppListIncidents/state/types';


const API_BASE = `https://bikewise.org/api/v2`;

const calls: {[key: string]: any} = {};


export const fetchIncidents = (filter?: StateQueryFilter, location: string = CONFIG.FILTER_LOCATION): Promise<ApiList<Incident[]>> => {
    if (calls.fetchIncidents) {
      calls.fetchIncidents.cancel('Only one request allowed at a time.');
    }

    calls.fetchIncidents = axios.CancelToken.source();

    return axios({
        method: 'get',
        url: `${API_BASE}/incidents?proximity=${location}&${filter ? queryString.stringify(filter) : ''}`,
        cancelToken: calls.fetchIncidents.token,
    }).then((res: { data: { incidents: Incident[] } }): any => ({
        pagination: {
            page: _.get(filter, ['page'], 1),
            page_size: _.get(filter, ['per_page'], CONFIG.INCIDENTS_PAGE_SIZE),
            total_items: CONFIG.INCIDENTS_TOTAL_ITEMS,
            total_pages: Math.ceil( CONFIG.INCIDENTS_TOTAL_ITEMS / _.get(filter, ['per_page'], CONFIG.INCIDENTS_PAGE_SIZE) ),
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
