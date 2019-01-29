import { createInstance, request } from '../utils';
import config from '../../config';

const format = 'json';
const { access_token } = config.mapbox;
const baseURL = 'https://api.mapbox.com/geocoding/v5';

// https://api.mapbox.com/geocoding/v5/mapbox.places/Luiza+Rocco+91.json?access_token=

const MapBox = {
  get: ({ address }) => {
    const instance = createInstance({ baseURL });

    return request({
      instance,
      params: { access_token },
      config: {
        method: 'GET',
        url: `/mapbox.places/${encodeURI(address)}.${format}`,
      },
    });
  },
};

export default MapBox;