import { createInstance, request } from './utils';

const baseURL = 'https://bikewise.org/api/v2/';

// https://bikewise.org/api/v2/incidents?proximity=berlin
// https://bikewise.org/api/v2/incidents/94547

const BikeWise = {
  list: params => {
    const instance = createInstance({ baseURL });

    return request({
      instance,
      params,
      config: {
        method: 'GET',
        url: 'incidents',
      },
    });
  },

  get: id => {
    const instance = createInstance({ baseURL });

    return request({
      instance,
      config: {
        method: 'GET',
        url: `incidents/${id}`,
      },
    });
  },
};

export default BikeWise;