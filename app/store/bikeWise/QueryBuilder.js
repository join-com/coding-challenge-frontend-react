class QueryBuilder {
  static getHost() {
    return 'https://api.github.com';
  }

  constructor({ username }) {
    this.username = username;
  }

  getParams() {
    return {
      type: 'all',
      sort: 'updated',
    };
  }

  getPath() {
    return `/users/${this.username}/repos`;
  }
}

export default QueryBuilder;
