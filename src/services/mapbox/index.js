import { createInstance, request } from './utils';
import { mapbox } from '../../config';

const format = 'json';
const { access_token } = mapbox;
const baseURL = 'https://api.mapbox.com/geocoding/v5/';

// https://api.mapbox.com/geocoding/v5/mapbox.places/Luiza+Rocco+91.json?access_token=

const MapBox = {
  gett: address => {
    const instance = createInstance({ baseURL });

    return request({
      instance,
      config: {
        method: 'GET',
        url: `mapbox.places/${encodeURI(address)}.${format}`,
        params: { access_token },
      },
    });
  },
};

export default MapBox;