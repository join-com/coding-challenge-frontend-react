import { expect } from 'chai';
import Immutable from 'seamless-immutable';

import { selectLocalesLanguage } from '../locales.selectors';

describe('Locales: selectors', () => {
  const language = 'en';

  const mockedState = Immutable({
    locales: {
      language,
    },
  });

  describe('selectLocalesLanguage', () => {
    it('should select language', () => {
      expect(selectLocalesLanguage(mockedState)).to.equal(language);
    });
  });
});
