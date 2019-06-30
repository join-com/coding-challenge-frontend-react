import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { selectStartupDomain } from '../startup.selectors';

describe('Startup: selectors', () => {
  const state = Immutable({
    startup: {},
  });

  describe('selectStartupDomain', () => {
    it('should select a domain', () => {
      expect(selectStartupDomain(state)).to.equal(state.startup);
    });
  });
});
