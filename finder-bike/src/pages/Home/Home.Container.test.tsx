import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import HomeContainer from './Home.Container';
import { homeReducer } from './Home.reducer';

afterEach(cleanup);

function renderWithRedux(
  ui,
  {
    initialState = { homeReducer: {} },
    store = createStore(homeReducer, initialState)
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test('can render with redux with defaults', () => {
  const { getByText } = renderWithRedux(<HomeContainer />);
  expect(getByText('POLICE DEPARTMENT')).toBeTruthy();
});

test('can render with redux with data with incidents', async () => {
  const { container, getAllByText, getByText } = renderWithRedux(
    <HomeContainer />,
    {
      initialState: {
        homeReducer: {
          data: [
            {
              id: 99362,
              title: 'Stolen 2016 Cube Analog(blue)',
              description: 'There were 2',
              address: 'Berlin, 10827, DE',
              occurred_at: 1556179200,
              updated_at: 1560049308,
              url: 'https://bikewise.org/api/v1/incidents/99362',
              source: {
                name: 'BikeIndex.org',
                html_url: 'https://bikeindex.org/bikes/603410',
                api_url: 'https://bikeindex.org/api/v1/bikes/603410'
              },
              media: {
                image_url:
                  'https://files.bikeindex.org/uploads/Pu/153579/large_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg',
                image_url_thumb:
                  'https://files.bikeindex.org/uploads/Pu/153579/small_WhatsApp_Image_2019-04-25_at_14.01.49.jpeg'
              },
              location_type: 'Thref',
              location_description: 'test',
              type: 'Theft',
              type_properties: 'test'
            }
          ]
        }
      }
    }
  );

  const titleNode = getByText('Stolen 2016 Cube Analog(blue)');
  const descriptionNode = getByText('There were 2');

  expect(titleNode).toBeTruthy();
  expect(descriptionNode).toBeTruthy();
});

test('can render with redux with data with empty indient', async () => {
  const { container, getByText } = renderWithRedux(<HomeContainer />, {
    initialState: {
      homeReducer: {
        data: []
      }
    }
  });

  const emptyTextNode = getByText('Not found !');

  expect(emptyTextNode).toBeTruthy();
});

test('can render with redux with data with error indient', async () => {
  const { container, getByText } = renderWithRedux(<HomeContainer />, {
    initialState: {
      homeReducer: {
        data: [],
        request: false,
        error: {
          message: 'ERROR !'
        }
      }
    }
  });

  const errorTextNode = getByText('ERROR !');

  expect(errorTextNode).toBeTruthy();
});
