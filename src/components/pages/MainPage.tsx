import React from 'react';
import FilterRow from '../FilterRow/FilterRow';
import Results from '../Results/Results';
import Page from '../Page/Page';
import queryString from 'query-string';

type MainPageProps = {
  location: any;
};

const MainPage: React.FC<MainPageProps> = ({ location }) => {
  const page = +(queryString.parse(location.search).page || 1);

  return (
    <Page>
      <FilterRow />
      <Results page={page} />
    </Page>
  );
};

export default MainPage;
