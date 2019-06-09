import React from 'react';
import styled from '@emotion/styled';
import { Incident } from '../../types';

import colors from '../../constants/colors';
import bycicleIcon from './bycicle.svg';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.gray4};
  margin: 12px 0;
`;

const Content = styled.div`
  padding: 24px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
`;

const IMAGE_SIZE = 180;

const ImageWrapper = styled.div`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  flex-shrink: 0;
  background-image: url(${bycicleIcon});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  height: 100%;
`;

const Card: React.FC<Incident> = ({ title, description, imageUrl }) => (
  <Wrapper>
    <ImageWrapper>
      <Image src={imageUrl} />
    </ImageWrapper>

    <Content>
      <Title>{title}</Title>
      {description}
    </Content>
  </Wrapper>
);

export default Card;
