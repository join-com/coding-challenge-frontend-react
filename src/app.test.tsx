import { shallow } from 'enzyme';
import React from 'react';

import { App } from './app';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchInlineSnapshot(`
<ApolloProvider
  client={
    DefaultClient {
      "cache": InMemoryCache {
        "addTypename": true,
        "cacheKeyRoot": CacheKeyNode {
          "children": null,
          "key": null,
        },
        "config": Object {
          "addTypename": true,
          "dataIdFromObject": [Function],
          "fragmentMatcher": HeuristicFragmentMatcher {},
          "resultCaching": true,
        },
        "data": DepTrackingCache {
          "data": Object {},
          "depend": [Function],
        },
        "maybeBroadcastWatch": [Function],
        "optimisticData": DepTrackingCache {
          "data": Object {},
          "depend": [Function],
        },
        "silenceBroadcast": false,
        "storeReader": StoreReader {
          "cacheKeyRoot": CacheKeyNode {
            "children": null,
            "key": null,
          },
          "executeSelectionSet": [Function],
          "executeStoreQuery": [Function],
        },
        "storeWriter": StoreWriter {},
        "typenameDocumentCache": Map {},
        "watches": Set {},
      },
      "clearStoreCallbacks": Array [],
      "clientAwareness": Object {},
      "defaultOptions": Object {},
      "disableNetworkFetches": false,
      "link": ApolloLink {
        "request": [Function],
      },
      "mutate": [Function],
      "query": [Function],
      "queryDeduplication": true,
      "reFetchObservableQueries": [Function],
      "resetStore": [Function],
      "resetStoreCallbacks": Array [],
      "ssrMode": false,
      "store": DataStore {
        "cache": InMemoryCache {
          "addTypename": true,
          "cacheKeyRoot": CacheKeyNode {
            "children": null,
            "key": null,
          },
          "config": Object {
            "addTypename": true,
            "dataIdFromObject": [Function],
            "fragmentMatcher": HeuristicFragmentMatcher {},
            "resultCaching": true,
          },
          "data": DepTrackingCache {
            "data": Object {},
            "depend": [Function],
          },
          "maybeBroadcastWatch": [Function],
          "optimisticData": DepTrackingCache {
            "data": Object {},
            "depend": [Function],
          },
          "silenceBroadcast": false,
          "storeReader": StoreReader {
            "cacheKeyRoot": CacheKeyNode {
              "children": null,
              "key": null,
            },
            "executeSelectionSet": [Function],
            "executeStoreQuery": [Function],
          },
          "storeWriter": StoreWriter {},
          "typenameDocumentCache": Map {},
          "watches": Set {},
        },
      },
      "version": "2.4.12",
      "watchQuery": [Function],
    }
  }
>
  <Row
    gutter={0}
  >
    <Col
      lg={
        Object {
          "offset": 4,
          "span": 16,
        }
      }
      md={
        Object {
          "offset": 2,
          "span": 20,
        }
      }
      xl={
        Object {
          "offset": 6,
          "span": 12,
        }
      }
      xs={
        Object {
          "offset": 1,
          "span": 22,
        }
      }
    >
      <Header />
      <Cases />
    </Col>
  </Row>
</ApolloProvider>
`);
});
