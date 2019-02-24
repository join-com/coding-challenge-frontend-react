import React from 'react';
import Profile from './components/Profile';

export const DetailsPage = props => {
  return (
    <div className='container'>
      <Profile id={props.location.pathname} />
    </div>
  )
};

