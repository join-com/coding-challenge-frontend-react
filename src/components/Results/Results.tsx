import React from 'react';
import styled from '@emotion/styled';
import Card, { CardProps } from '../Card/Card';
import { Pagination } from 'antd';

const TotalBlock = styled.div`
  text-align: right;
  margin-bottom: 12px;
`;

const ItemsWrapper = styled.div`
  padding-bottom: 12px;
`;

type ResultItemsProps = {
  items: Array<CardProps>;
};

const Results: React.FC<ResultItemsProps> = ({ items }) => (
  <div>
    <TotalBlock>Total: {items.length}</TotalBlock>

    <ItemsWrapper>
      {items.map(item => (
        <Card {...item} key={item.id} />
      ))}
    </ItemsWrapper>

    <Pagination defaultCurrent={6} total={500} />
  </div>
);

export default Results;
