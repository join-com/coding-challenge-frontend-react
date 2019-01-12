import React from 'react'

import defaultImage from './not_available.jpg'
import './style.css'

const Image = ({ src }) => {
  if (!src) src = defaultImage
  return <img src={src} alt="not available" className="img-thumbnail" />
}

export default Image
