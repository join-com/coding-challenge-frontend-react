import { ITEMS_PER_PAGE } from './constants';

class QueryBuilder {
  static getHost() {
    return 'https://bikewise.org:443';
  }

  constructor(optionalFields) {
    this.params = {
      per_page: ITEMS_PER_PAGE,
      proximity: 'Berlin',
      proximity_square: 100,
    };

    Object.keys(optionalFields).forEach(field => {
      if(optionalFields[field] !== undefined) {
        this.params[field] = optionalFields[field];
      }
    });
  }

  getParams(page) {
    return {...this.params, ...{page}};
  }

  getPath() {
    return '/api/v2/incidents';
  }
}

export default QueryBuilder;
