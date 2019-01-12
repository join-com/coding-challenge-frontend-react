import React from 'react'

import defaultImage from './not_available.jpg'
import './style.css'

const Image = ({ src, style }) => {
  if (!src) src = defaultImage
  return <img src={src} alt="not available" className="img-thumbnail" style={style} />
}

export default Image
