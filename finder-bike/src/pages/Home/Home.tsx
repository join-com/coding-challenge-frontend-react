import React, { useCallback } from 'react';
import { Button } from '../../shared/ui-kits/Button';
import Header from '../../shared/components/Header/Header';

export default function Home(props) {
  const { text, getText, laoding } = props;

  const getTextHandler = useCallback(() => {
    getText();
  }, [getText]);

  if (laoding) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <p>{text}</p>
      <Button onClick={getTextHandler} color="primary">
        Get Text here
      </Button>
    </div>
  );
}
