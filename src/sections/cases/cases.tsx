import React, { useState } from 'react';

import { SearchBar } from './search-bar';

export const Cases: React.FC<{}> = () => {
  const [query, setQuery] = useState<string>('');

  return (
    <>
      <SearchBar query={query} onChange={setQuery} />
    </>
  );
};
