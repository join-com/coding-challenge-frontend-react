import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import BikesPage from './pages/bikes';
import BikeDetailPage from './pages/bikeDetail';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Switch>
        <Route exact path="/" component={BikesPage} />
        <Route exact path="/case/:caseId" component={BikeDetailPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Box>
  );
}

export default App;
