import React from 'react';

import { Cases } from './sections/cases';
import { Header } from './sections/common/header';

export const App: React.FC<{}> = () => (
  <>
    <Header />
    <Cases />
  </>
);
