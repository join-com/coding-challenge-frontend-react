export type IncidentType = 'Theft' | 'Unconfirmed' | 'Hazard';

export interface Incident {
    id: number;
    title: string;
    description: string;
    address: string;
    occurred_at: number;
    updated_at: number;
    url: string;
    source: {
        name: string;
        html_url: string;
        api_url: string;
    };
    media: {
        image_url: string | null;
        image_url_thumb: string | null;
    };
    location_type: string | null;
    location_description: string | null;
    type: IncidentType;
    type_properties: string | null;
}

export interface IncidentRequestOptions {
    page?: number; // Page of results to fetch.
    perPage?: number; // Number of results to return per page.
    occurredAfter?: number; // Start of period
    occurredBefore?: number; // End of period
    incidentType?: string; // Only incidents of specific type
    proximity?: string; // Center of location for proximity search
    proximitySquare?: number; // Size of the proximity search
    query?: string; // Full text search of incidents
}
