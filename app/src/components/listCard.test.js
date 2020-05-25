import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ListCard from './listCard';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const incident = {
  id: 117892,
  title: 'Stolen 2013 Specialized Ariel Sport(black and white)',
  description:
    "Some time between May 3-22 she went missing from my apartment building's locked basement storage. I last rode the bike and stored it on May 3, and only discovered it was gone on May 22.",
  address: 'Richmond, VA, 23220',
  occurred_at: 1590264933,
  updated_at: 1590278436,
  media: {
    image_url:
      'https://files.bikeindex.org/uploads/Pu/251685/large_20200522_165045.jpg',
  },
  type: 'Theft',
};

it('renders Card data', async () => {
  await act(async () => {
    render(<ListCard incident={incident} />, container);
  });

  expect(container.textContent).toContain(incident.title);
  expect(container.textContent).toContain(incident.description);
  expect(container.textContent).toContain(incident.address);
});
