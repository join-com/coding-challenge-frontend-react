import React, { useState } from 'react';

import { CasesList } from './cases-list';
import { SearchBar } from './search-bar';

const PAGE_SIZE = 5;

export interface ICaseData {
  id: number;
  image: string;
  title: string;
  description: string;
  content: string;
}

export interface ICasesData {
  list: ICaseData[];
  total: number;
}

export const setQueryResetPage = (setQuery: React.Dispatch<string>, setPage: React.Dispatch<number>) => (
  newQuery: string,
) => {
  setQuery(newQuery);
  setPage(1);
};

export const Cases: React.FC<{}> = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const handleChange = setQueryResetPage(setQuery, setPage);

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <CasesList filters={{ query }} page={{ value: page, set: setPage }} pageSize={PAGE_SIZE} />
    </>
  );
};
