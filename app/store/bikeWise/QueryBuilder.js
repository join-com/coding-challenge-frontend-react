class QueryBuilder {
  static getHost() {
    return 'https://bikewise.org:443';
  }

  constructor({ query }) {
    this.params = {
      per_page: 10,
      proximity: 'Berlin',
      proximity_square: 100,
    };

    if(query !== undefined) {
      this.params.query = query;
    }
  }

  getParams(page) {
    return {...this.params, ...{page}};
  }

  getPath() {
    return '/api/v2/incidents';
  }
}

export default QueryBuilder;
