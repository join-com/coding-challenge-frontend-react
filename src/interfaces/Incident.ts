import { IncidentMedia } from './IncidentMedia';
import { IncidentSource } from './IncidentSource';


export interface Incident {
    id: number;
    type: string;
    title: string;
    description?: string;
    address: string;
    occurred_at: number;
    updated_at: number;
    url: string;
    media: IncidentMedia;
    source: IncidentSource;
    location_type?: string;
    location_description?: string;
    type_properties: any;
}
