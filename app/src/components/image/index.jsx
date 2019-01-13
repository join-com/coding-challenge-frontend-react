import React from 'react'

import defaultImage from './not_available.jpg'
import './style.css'

const ImageComponent = ({ src, style }) => <img src={src} alt="not available" className="img-thumbnail" style={style} />

const Image = ({ src, style }) => {
  if (!src) src = defaultImage
  return <ImageComponent src={src} style={style} />
}

export default Image
