import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Bikespage from './pages/bikes';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Switch>
        <Route exact path="/" component={Bikespage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Box>
  );
}

export default App;
