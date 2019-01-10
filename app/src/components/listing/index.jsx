import React from 'react'

import Header from '../header'
const Listing = props => {
  const { banner } = props
  return (
    <div className="container">
      <Header banner={banner} />
    </div>
  )
}

export default Listing
