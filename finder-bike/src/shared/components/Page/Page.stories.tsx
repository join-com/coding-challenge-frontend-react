import { storiesOf } from '@storybook/react';
import React, { useState, useCallback } from 'react';
import Page from './Page';
import { action } from '@storybook/addon-actions';

function PagePlayGround() {
  const [currentPage, setCurrentPage] = useState(1);
  const onClick = useCallback(value => {
    setCurrentPage(value);
  }, []);

  return (
    <Page
      pageSize={10}
      currentPage={currentPage}
      totalItems={100}
      maxPages={5}
      onClick={onClick}
    />
  );
}

storiesOf('Components/Page', module)
  .add('Basic', () => (
    <Page
      pageSize={10}
      currentPage={4}
      totalItems={100}
      maxPages={5}
      onClick={action('onClick')}
    />
  ))
  .add('Playground', () => <PagePlayGround />);
