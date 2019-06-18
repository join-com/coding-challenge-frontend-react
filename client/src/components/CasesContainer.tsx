import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import { fetchAllCases, fetchSourceAll } from "../helpers/Api";
import Case from "../models/ICase";
import { setItemsCount } from "../reducers";
import TheftCase from "./TheftCase";

interface ICaseContainerProps {
    className?: string;
    _setItemsCount: (items: number) => void;
    search?: string;
    to?: string;
    from?: string;
}
const ITEMS_PER_PAGE = 10;
const CasesContainer: FC<ICaseContainerProps> = ({ className = "", _setItemsCount, search, from, to }) => {

const [cases, setCases] = useState(new Array<Case>());
const [loading, setLoading] = useState(true);
useEffect(() => {
  const doFetchAllCases = async () => {
    const result = await fetchAllCases(search, from, to);
    setCases(result);
    _setItemsCount(result.length);
    setLoading(false);
  };
  doFetchAllCases();
  setLoading(true);
}, [search, to, from]);
const [currentPage, setcurrentPage] = useState(0);
const pageCount = Math.ceil(cases.length / ITEMS_PER_PAGE);
return <div className={className}>
  <section>
    {!loading &&
      cases
        .slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)
        .map((data) => <TheftCase data={data}/>)}
    {!loading && cases.length === 0 &&
    <div className="not-found">:37
      <h1>Sorry No Reports Found</h1>
    </div>
    }
    {loading && <Spinner />}
  </section>
  <Pagination currentPage={currentPage} setCurrentPage={setcurrentPage} pageCount={pageCount} />
</div>;

};

const mapStateToProps = (state: any) => ({
  from: state.items.from,
  search: state.items.search,
  to: state.items.to,
});


const dispatchToProps = (dispatch: any) => ({
  _setItemsCount: (itemsCount: number) => dispatch(setItemsCount(itemsCount)),
});


const connectedCasesContainer = connect(mapStateToProps, dispatchToProps)(CasesContainer);

export default Styled(connectedCasesContainer)`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  section {
   flex: 1;
   overflow-y: auto;
   padding: 0 50px;
  }
  .not-found {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4rem;
    }
  }
`;
