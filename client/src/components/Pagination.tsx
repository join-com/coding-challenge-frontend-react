import React, { Children, FC, Fragment } from "react";
import Styled from "styled-components";

const StyledPageLink = Styled.li`
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
cursor: pointer;
background-color: ${(props: any) => props.active ? "#5652BF" : "auto"};
&:hover {
  background-color: #5652BF;
  color: white;
  border-color: transparent;
  box-shadow: 1px 1px 8px -5px #6662CF;
}
`;
const PageLink = (props: any) => <StyledPageLink {...props} />;

interface IPagination {
    className?: string;
    pageCount: number;
    currentPage: number;
    setCurrentPage: (pageNumber: number) => void;
}

const Pagination: FC <IPagination> = ({ className, pageCount, currentPage, setCurrentPage }) => {
const hasPrev = currentPage > 0;
const hasNext = currentPage + 1 < pageCount;
return <ul className={className}>
  { pageCount ?
    <Fragment>
      <PageLink onClick={() => setCurrentPage(0)}>{"<<"}</PageLink>
      <PageLink
        disabled={!hasPrev}
        onClick={() => hasPrev && setCurrentPage(currentPage - 1)}
      >
        {"<"}
      </PageLink>
      {[...Array(pageCount)].map((p, i) =>
        <PageLink index={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
          {i + 1}
        </PageLink>)
      }
      <PageLink disabled={!hasNext} onClick={() => hasNext && setCurrentPage(currentPage + 1)}>
        {">"}
      </PageLink>
      <PageLink onClick={() => setCurrentPage(pageCount - 1)}>
        {">>"}
      </PageLink>
    </Fragment> : ""
  }
</ul>;
};

export default Styled(Pagination)`
  display: flex;
  justify-content: center;
  width: 100%;
`;
