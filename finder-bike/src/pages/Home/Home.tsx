import React, { useCallback } from 'react';
import { Button } from '../../shared/ui-kits/Button';
import Header from '../../shared/components/Header/Header';
import { Layout } from '../../shared/components/Layout';

export default function Home(props) {
  const { text, getText, laoding } = props;

  const getTextHandler = useCallback(() => {
    getText();
  }, [getText]);

  if (laoding) return <p>Loading...</p>;

  return (
    <Layout>
      <Header />
    </Layout>
  );
}
