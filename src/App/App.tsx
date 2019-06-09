import React from 'react';
import 'antd/dist/antd.css';

import Page from '../components/Page/Page';
import FilterRow from '../components/FilterRow/FilterRow';
import Results from '../components/Results/Results';

const itemsMock = [
  {
    id: 1,
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: 2,
    title: 'title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

const App: React.FC = () => {
  return (
    <Page>
      <FilterRow />
      <Results items={itemsMock} />
    </Page>
  );
};

export default App;
