import { ApiPagination } from './ApiPagination';


export interface ApiList<T> {
    pagination: ApiPagination;
    collection: T[];
}
