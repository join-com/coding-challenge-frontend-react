import React from 'react';
import styled from '@emotion/styled';

import { Incidents } from '../../types';

import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import { Pagination, Icon } from 'antd';
import { RESULTS_PER_PAGE } from '../../constants/main';

const TotalBlock = styled.div`
  text-align: right;
  margin-bottom: 12px;
`;

const ItemsWrapper = styled.div`
  padding-bottom: 12px;
`;

type ResultItemsProps = {
  incidents?: Incidents;
  page?: number;
};

const getCurPageIncidents = (incidents: any, page: number) =>
  Object.keys(incidents)
    .reverse()
    .map(key => incidents[key])
    .slice(RESULTS_PER_PAGE * (page - 1), RESULTS_PER_PAGE * page);

const renderPageButton = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next'
): React.ReactNode => {
  switch (type) {
    case 'page':
      return <NavLink to={`/?page=${page}`}>{page}</NavLink>;
    case 'prev':
      return page > 0 ? (
        <NavLink to={`/?page=${page}`}>
          <Icon type="left" />
        </NavLink>
      ) : (
        <a>
          <Icon type="left" />
        </a>
      );
    case 'next':
      return (
        <NavLink to={`/?page=${page}`}>
          <Icon type="right" />
        </NavLink>
      );
    case 'jump-prev':
    case 'jump-next':
      return <span>&#8226;&#8226;&#8226;</span>;
  }
};

const Results: React.FC<ResultItemsProps> = ({ incidents = [], page = 1 }) => {
  const incidentsCount = Object.keys(incidents).length;

  return (
    <div>
      <TotalBlock>Total: {incidentsCount}</TotalBlock>

      <ItemsWrapper>
        {getCurPageIncidents(incidents, page).map(incident => (
          <Card {...incident} key={incident.id} />
        ))}
      </ItemsWrapper>

      {
        <Pagination
          hideOnSinglePage
          current={page}
          total={incidentsCount}
          pageSize={RESULTS_PER_PAGE}
          itemRender={renderPageButton}
        />
      }
    </div>
  );
};

export default Results;
