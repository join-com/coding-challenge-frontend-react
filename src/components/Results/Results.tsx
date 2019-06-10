import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import { Incident } from '../../types';
import { StoreState } from '../../store';

import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import { Pagination, Icon } from 'antd';

const TotalBlock = styled.div`
  text-align: right;
  margin-bottom: 12px;
`;

const ItemsWrapper = styled.div`
  padding-bottom: 12px;
`;

type ResultItemsProps = {
  incidents?: Array<Incident>;
  page?: number;
};

const ELEMS_PER_PAGE = 10;

const getCurPageIncidents = (incidents: Array<any>, page: number) =>
  incidents.slice(ELEMS_PER_PAGE * (page - 1), ELEMS_PER_PAGE * page);

const renderPageButton = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next'
) => {
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
  return (
    <div>
      <TotalBlock>Total: {incidents.length}</TotalBlock>

      <ItemsWrapper>
        {getCurPageIncidents(incidents, page).map(incident => (
          <Card {...incident} key={incident.id} />
        ))}
      </ItemsWrapper>

      {
        <Pagination
          hideOnSinglePage
          current={page}
          total={incidents.length}
          pageSize={ELEMS_PER_PAGE}
          itemRender={renderPageButton}
        />
      }
    </div>
  );
};

const mapStateToProps = ({ incidents }: StoreState) => ({ incidents });

export default connect(mapStateToProps)(Results);
