import React from 'react';
import styled from 'styled-components';
import noImage from '../../../assets/images/no-image.png';

const StyledImage = styled.img`
  width: 100%;
`;

export interface IImageProps {
  src: string;
}

function Image({ src, ...props }: IImageProps) {
  return <StyledImage src={src ? src : noImage} {...props} />;
}
export default Image;
