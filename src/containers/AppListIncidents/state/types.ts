import * as CONFIG from '../../../config';
import { ApiList, Incident } from '../../../interfaces';


export enum Actions {
    DO_FETCH_INCIDENTS = '@@AppListIncidents/DO_FETCH_INCIDENTS',
    DO_CLEAR_ERROR = '@@AppListIncidents/DO_CLEAR_ERROR',
    DO_SET_ERROR = '@@AppListIncidents/DO_SET_ERROR',
    DO_SET_BUSY_STATUS = '@@AppListIncidents/DO_SET_BUSY_STATUS',
    DO_SET_FILTER = '@@AppListIncidents/DO_SET_FILTER',
    DO_PAGINATE = '@@AppListIncidents/DO_PAGINATE',
}

export interface State {
    readonly isBusy: boolean;
    readonly filter?: StateQueryFilter;
    readonly incidents?: ApiList<Incident[]>;
    readonly error?: string;
}

export interface StateQueryFilter {
    page?: number;
    per_page?: number;
    occurred_before?: number;
    occurred_after?: number;
    query?: string;
}

export const StateQueryFilterDefault: StateQueryFilter = {
    page: 1,
    per_page: CONFIG.INCIDENTS_PAGE_SIZE,
};
