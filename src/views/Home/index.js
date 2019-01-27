import React, { Component } from 'react';

import Incident from '../../components/Incident';

class Home extends Component {
  render() {
    return (
      <>
        {/* <h1>Home Page</h1> */}
        <Incident.List />
      </>
    );
  }
};

export default Home;