// Test utilities
import { IncidentsModel } from './testData';

export class FetchResponse {
  constructor({
    status = global.fetchResponseStatus,
    fetchResponseData = new IncidentsModel(),
  } = {}) {
    return {
      status,
      json() {
        return Promise.resolve(fetchResponseData);
      },
    };
  }
}
