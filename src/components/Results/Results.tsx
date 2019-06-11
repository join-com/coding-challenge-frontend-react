import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { Incident } from '../../types';

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

const scrollTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

const renderPageButton = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next'
): React.ReactNode => {
  switch (type) {
    case 'page':
      return (
        <NavLink to={`/?page=${page}`} onClick={scrollTop}>
          {page}
        </NavLink>
      );
    case 'prev':
      return page > 0 ? (
        <NavLink to={`/?page=${page}`} onClick={scrollTop}>
          <Icon type="left" />
        </NavLink>
      ) : (
        <a>
          <Icon type="left" />
        </a>
      );
    case 'next':
      return (
        <NavLink to={`/?page=${page}`} onClick={scrollTop}>
          <Icon type="right" />
        </NavLink>
      );
    case 'jump-prev':
    case 'jump-next':
      return <span>&#8226;&#8226;&#8226;</span>;
  }
};

type ResultItemsProps = {
  curPageResults?: Array<Incident>;
  totalCount: number;
  curPage?: number;
};

const Results: React.FC<ResultItemsProps> = ({
  curPageResults,
  curPage = 1,
  totalCount
}) => {
  return (
    <div>
      <TotalBlock>Total: {totalCount}</TotalBlock>

      {totalCount < 1 ? (
        <div>No results</div>
      ) : (
        <Fragment>
          <ItemsWrapper>
            {curPageResults &&
              curPageResults.map(incident => (
                <Card {...incident} key={incident.id} />
              ))}
          </ItemsWrapper>

          <Pagination
            hideOnSinglePage
            current={curPage}
            total={totalCount}
            pageSize={RESULTS_PER_PAGE}
            itemRender={renderPageButton}
          />
        </Fragment>
      )}
    </div>
  );
};

export default Results;
