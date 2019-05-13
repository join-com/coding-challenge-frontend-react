import { fromJS } from 'immutable';

let sagaMiddlewareRunCallback;
const runCreateSagaMiddleware = jest.fn((callback) => {
  sagaMiddlewareRunCallback = callback;
});

const createSagaMiddleware = require('redux-saga');
createSagaMiddleware.default = jest.fn(() => ({ run: runCreateSagaMiddleware }));
const configureStore = require('./').default;

jest.mock('redux-saga/effects', () => ({
  fork: (saga) => `forked ${saga}`,
}));

jest.mock('redux', () => ({
  applyMiddleware: (middleware1, middleware2) => ({
    appliedMiddleware: ['sagaMiddleware', middleware2],
  }),
  compose: (composed) => ({ composed }),
  createStore: (reducers, state, middleware) => ({ reducers, state, middleware }),
}));

jest.mock('react-router-redux', () => ({
  routerMiddleware: (history) => ({
    routerHistory: history,
  }),
}));

jest.mock('redux-immutable', () => ({
  combineReducers: (reducers) => ({
    combinedReducers: reducers,
  }),
}));

describe('store', () => {
  const reducersList = ['reducer 1', 'reducer 2'];

  const getExpectedResult = (state, history) => ({
    reducers: {
      combinedReducers: { ...reducersList },
    },
    state: fromJS(state),
    middleware: {
      composed: {
        appliedMiddleware: [
          'sagaMiddleware',
          {
            routerHistory: history,
          },
        ],
      },
    },
  });

  beforeEach(() => expect(createSagaMiddleware.default).toBeCalled());

  describe('custom arguments', () => {
    const initialState = { field: 'value' };
    const sagasList = ['saga A', 'saga B'];
    const browserHistory = 'the history';

    it('returns the store', () => {
      expect(configureStore(reducersList, initialState, sagasList, browserHistory))
        .toEqual(getExpectedResult(initialState, browserHistory));
    });

    afterEach(() => expect(sagaMiddlewareRunCallback().next().value).toEqual(['forked saga A', 'forked saga B']));
  });

  describe('default arguments', () => {
    it('returns the store', () => expect(configureStore(reducersList)).toEqual(getExpectedResult({}, {})));
  });

  afterEach(() => expect(runCreateSagaMiddleware).toBeCalled());
});
