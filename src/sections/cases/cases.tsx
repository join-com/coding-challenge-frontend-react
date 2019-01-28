import React, { useState } from 'react';
import { useAsync } from 'react-use';
import { createAPIRequest } from './cases.api';

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

export const Cases: React.FC<{}> = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const request = createAPIRequest(query, page, PAGE_SIZE);
  const data = useAsync<ICasesData>(request, [query, page]);

  return (
    <>
      <SearchBar query={query} onChange={setQuery} />
      <CasesList data={data} page={{ value: page, set: setPage }} pageSize={PAGE_SIZE} />
    </>
  );
};
