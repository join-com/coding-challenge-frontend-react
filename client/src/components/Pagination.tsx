import React, { FC } from "react";
import Styled from "styled-components";

const PageLink = (props: any) => <li {...props} />;


interface IPagination {
    className?: string;
    pageCount: number;
    currentPage: number;
}

const Pagination: FC <IPagination> = ({ className, pageCount, currentPage }) => {
const hasPrev = currentPage > 0;
const hasNext = currentPage <= pageCount;
return <ul className={className}>
  <PageLink disabled={!hasPrev}>{"<"}</PageLink>
  {[...Array(pageCount)].map((p, i) => <PageLink>{i + 1}</PageLink>)}
  <PageLink disabled={!hasNext}>{">"}</PageLink>
</ul>;
};

export default Styled(Pagination)`
  display: flex;
  justify-content: center;
  width: 100%;
  li {
    border: 1px solid #CCC;
    color: #CCC;
    box-shadow: 1px 1px 5px -5px black;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    margin: 3px;
    &:hover {
      background-color: #5652BF;
      color: white;
      border-color: transparent;
      box-shadow: 1px 1px 8px -5px #6662CF;
    }
  }
`;
