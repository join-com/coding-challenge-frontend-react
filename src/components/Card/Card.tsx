import React from 'react';
import styled from '@emotion/styled';
import { Incident } from '../../types';
import { NavLink } from 'react-router-dom';

import colors from '../../constants/colors';
import bycicleIcon from './bycicle.svg';
import getFormattedDate from '../../utils/getFormattedDate';
import { getTextWithDots } from './utils';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.gray};
  margin: 12px 0;
`;

const Content = styled.div`
  padding: 16px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
`;

const IMAGE_SIZE = 200;

const ImageWrapper = styled.div`
  width: ${IMAGE_SIZE}px;
  height: ${IMAGE_SIZE}px;
  border-right: 1px solid ${colors.gray};
  border-bottom: 1px solid ${colors.gray};
  margin-bottom: -1px;
  flex-shrink: 0;
`;

const Image = styled.img`
  height: 100%;
`;

const UpdateBlock = styled.div`
  margin-top: auto;
  align-self: flex-end;
  font-size: 13px;
`;

const Card: React.FC<Incident> = ({
  id,
  title,
  description,
  imageUrlThumb,
  address,
  incidentDate,
  updateDate
}) => {
  const linkPath = `/incident/${id}`;

  return (
    <Wrapper>
      <NavLink to={linkPath}>
        <ImageWrapper>
          <Image src={imageUrlThumb || bycicleIcon} />
        </ImageWrapper>
      </NavLink>

      <Content>
        <NavLink to={linkPath}>
          <Title>{title}</Title>
        </NavLink>

        <p>{getTextWithDots(description || 'No description', 315)}</p>

        <p>
          {!!incidentDate &&
            getFormattedDate(incidentDate, { withTime: false })}
          {!!(incidentDate && address) && ` - `}
          {address}
        </p>

        {!!updateDate && (
          <UpdateBlock>
            Updated: {getFormattedDate(updateDate, { withTime: false })}
          </UpdateBlock>
        )}
      </Content>
    </Wrapper>
  );
};

export default Card;
