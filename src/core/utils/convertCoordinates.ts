import { IGeoCoordinates } from 'types';

export function convertCoordinates(coordinates: number[]): IGeoCoordinates {
    return { lng: coordinates[0], lat: coordinates[1] };
}
