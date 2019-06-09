import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import { Incident } from '../../types';
import { StoreState } from '../../store';

import Card from '../Card/Card';
import { Pagination } from 'antd';

const TotalBlock = styled.div`
  text-align: right;
  margin-bottom: 12px;
`;

const ItemsWrapper = styled.div`
  padding-bottom: 12px;
`;

type ResultItemsProps = {
  incidents?: Array<Incident>;
};

const Results: React.FC<ResultItemsProps> = ({ incidents = [] }) => (
  <div>
    <TotalBlock>Total: {incidents.length}</TotalBlock>

    <ItemsWrapper>
      {incidents.map(incident => (
        <Card {...incident} key={incident.id} />
      ))}
    </ItemsWrapper>

    <Pagination defaultCurrent={6} total={500} />
  </div>
);

const mapStateToProps = ({ incidents }: StoreState) => ({ incidents });

export default connect(mapStateToProps)(Results);
