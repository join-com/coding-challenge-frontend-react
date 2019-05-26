import { convertCoordinates } from '../convertCoordinates';

it('should be js timestamp', (): void => {
    Object.is(convertCoordinates([13.4275004, 52.4890809]), {
        lng: 13.4275004,
        lat: 52.4890809,
    });
});
