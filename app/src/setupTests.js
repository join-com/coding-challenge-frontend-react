import '@babel/polyfill';
import 'isomorphic-fetch';
import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import nock from 'nock';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import chaiJestDiff from 'chai-jest-diff';

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(chaiJestDiff());
chai.config.includeStack = true;

nock.disableNetConnect();

afterEach(() => {
  nock.cleanAll();
});
