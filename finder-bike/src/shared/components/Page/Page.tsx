import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Text } from '../../ui-kits/Text';
import * as Colors from '../../ui-kits/Variables/Colors';
import paginate from './paginate';
import { Icon } from '../../ui-kits/Icon';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

export interface IPage {
  currentPage?: number;
  pageSize?: number;
  totalItems: number;
  maxPages?: number;
  onClick: (e: any) => void;
}

const StyledPageWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

const StyledPageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-rows: 1fr;
  text-align: center;
`;

const StyledPageListItem = styled.a`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-left: -1px;
  line-height: 1.25;

  border: 1px solid ${Colors.grey2};

  ${({ selected }) =>
    selected
      ? `
    background-color: ${Colors.primary};
    color: ${Colors.white}
  `
      : `
    background-color: ${Colors.white};
    color: ${Colors.primary}
  `}

  ${({ disabled, selected }) =>
    disabled
      ? `
    background-color: ${Colors.white};
    color: ${Colors.grey}
  `
      : !selected &&
        `
    cursor: pointer;
    :hover {
      text-decoration: none;
      background-color: ${Colors.grey};
    }
  `}
`;

function Page(props: IPage) {
  const { currentPage, totalPages, pages } = paginate(
    props.totalItems,
    props.currentPage,
    props.pageSize,
    props.maxPages
  );
  const selectPage = useCallback(
    value => {
      props.onClick(value);
    },
    [props]
  );

  return (
    <StyledPageWrapper>
      <StyledPageList>
        <StyledPageListItem
          disabled={pages[0] === 1}
          onClick={() => selectPage(currentPage - 1)}
        >
          <Icon size={'2x'} icon={faChevronLeft} />
        </StyledPageListItem>

        {pages.map(page => (
          <StyledPageListItem
            selected={currentPage === page}
            key={page}
            onClick={() => selectPage(page)}
          >
            <Text>{page}</Text>
          </StyledPageListItem>
        ))}

        <StyledPageListItem
          disabled={pages[pages.length - 1] === totalPages}
          onClick={() => selectPage(currentPage + 1)}
        >
          <Icon size={'2x'} icon={faChevronRight} />
        </StyledPageListItem>
      </StyledPageList>
    </StyledPageWrapper>
  );
}

export default Page;
