import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { selectIncidentsDomain } from '../incidents.selectors';

describe('Incidents: selectors', () => {
  const state = Immutable({
    incidents: {},
  });

  describe('selectIncidentsDomain', () => {
    it('should select a domain', () => {
      expect(selectIncidentsDomain(state)).to.equal(state.incidents);
    });
  });
});
