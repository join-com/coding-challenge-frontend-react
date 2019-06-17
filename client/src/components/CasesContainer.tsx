import React, { FC, useEffect, useState } from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { setItemsCount } from '../reducers';
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import { fetchAllCases, fetchSourceAll } from "../helpers/Api";
import Case from "../models/ICase";
import TheftCase from "./TheftCase";

interface ICaseContainerProps {
    className?: string;
    setItemsCount: Function;
}
const ITEMS_PER_PAGE = 10;
const CasesContainer: FC<ICaseContainerProps> = ({ className = "", setItemsCount }) => {

const [cases, setCases] = useState(new Array<Case>());
const [loading, setLoading] = useState(true);
useEffect(() => {
  const doFetchAllCases = async () => {
    const result = await fetchAllCases();
    setCases(result);
    setItemsCount(result.length);
    setLoading(false);
  };
  doFetchAllCases();
  setLoading(true);
}, []);
const [currentPage, setcurrentPage] = useState(0);
const pageCount = Math.ceil(cases.length / ITEMS_PER_PAGE);
return <div className={className}>
  {!loading && cases.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE).map( (data) => <TheftCase data={data}/>)}
  {loading && <Spinner />}
  <Pagination currentPage={currentPage} pageCount={pageCount} />
</div>;

};
const dispatchToProps = (dispatch: any) => ({
  setItemsCount: (itemsCount: number) => dispatch(setItemsCount(itemsCount))
})

const connectedCasesContainer = connect(null, dispatchToProps)(CasesContainer)

export default Styled(connectedCasesContainer)`
  max-width: 800px;
  padding: 50px;
  overflow: scroll;
  margin: auto;
`;
