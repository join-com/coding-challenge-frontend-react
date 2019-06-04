export type IncidentType = 'crash' | 'hazard' | 'theft' | 'unconfirmed' | 'infrastructure_issue' | 'chop_shop';
export const IncidentTypeText: { [key in IncidentType]: string } = {
    crash: 'Crash',
    hazard: 'Hazard',
    theft: 'Theft',
    unconfirmed: 'Unconfirmed',
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    infrastructure_issue: 'Infrastructure issue',
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    chop_shop: 'Chop shop',
};

export interface IIncidentDatabase {
    id: number;
    title: string;
    description: string;
    address: string;
    occurredAt: number;
    updatedAt: number;
    url: string;
    source: {
        name: string;
        htmlUrl: string;
        apiUrl: string;
    };
    media: {
        imageUrl: string | null;
        imageUrlThumb: string | null;
    };
    locationType: string | null;
    locationDescription: string | null;
    type: IncidentType;
    typeProperties: string | null;
}

export interface IGeoCoordinates {
    lat: number;
    lng: number;
}

export interface IIncident {
    id: number;
    title: string;
    description: string | null;
    address: string;
    occurredAt: number;
    imageUrl: string | null;
    imageUrlThumb: string | null;
    geometry?: IGeoCoordinates;
}

export interface IIncidentRequestOptions {
    page: number; // Page of results to fetch.
    perPage?: number; // Number of results to return per page.
    occurredBefore?: number; // End of period
    occurredAfter?: number; // Start of period
    incidentType?: IncidentType; // Only incidents of specific type
    proximity?: string; // Center of location for proximity search
    proximitySquare?: number; // Size of the proximity search
    query?: string; // Full text search of incidents
}

export interface IChangePageOptions {
    from: number;
    to: number;
    totalPages: number;
}

export interface ISearchRequestOptions {
    query?: string;
    from?: Date | null;
    to?: Date | null;
}

export interface IGeoGeometry {
    type: 'Point';
    coordinates: number[];
}

export interface IGeo {
    type: 'FeatureCollection';
    features: [
        {
            type: 'Feature';
            properties: {
                id: number;
                type: IncidentType;
                occurredAt: number;
            };
            geometry: IGeoGeometry;
        }
    ];
}

export interface IGeoRequestOptions {
    occurredBefore?: number; // End of period
    occurredAfter?: number; // Start of period
    incidentType?: IncidentType; // Only incidents of specific type
    proximity?: string; // Center of location for proximity search
    proximitySquare?: number; // Size of the proximity search
    query?: string; // Full text search of incidents
    limit?: number; // Max number of results to return. Defaults to 100
    all?: boolean; // Give ‘em all to me. Will ignore limit
}
