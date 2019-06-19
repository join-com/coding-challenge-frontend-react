import React, { FC, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { connect } from "react-redux";
import Switch from "react-switch";
import Styled from "styled-components";
import history from "../History";
import { setSearchQuery } from "../reducers";
import { setNightMode } from "../reducers";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";
interface IFinderBarProps {
    className?: string;
    itemsCount?: number;
    nightMode?: boolean;
    _setNightMode: (value: boolean) => void;
    _setSearchQuery: (search: string, from: string, to: string) => void;
}

const FinderBar: FC<IFinderBarProps> =
({ className = "", itemsCount, _setSearchQuery, nightMode = false, _setNightMode }) => {
  const [search, setSearch] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return <div className={className}>
    <Header />
    <form>
        <Input type="text" placeholder="Search" postfix="A" onChange={(value: any) => setSearch(value)}/>
        <Input type="date" placeholder="From" postfix={<FaCalendarAlt />} onChange={(value: any) => setFrom(value)}/>
        <Input type="date" placeholder="To" postfix={<FaCalendarAlt />} onChange={(value: any) => setTo(value)}/>
        <Button onClick={() => {
          history.push("/");
          _setSearchQuery(search, from, to);
        }} >Find cases</Button>
    </form>
    <div className="itemsCount">{itemsCount ? `${itemsCount} ${itemsCount > 1 ? "Cases" : "Case"} found` : ""} </div>
    <div>
      <FaMoon className="moon"/>
      <Switch onChange={_setNightMode} checked={nightMode}/>
    </div>
  </div>;
};
const dispatchToProps = (dispatch: any) => ({
  _setNightMode: (value: boolean) => dispatch(setNightMode(value)),
  _setSearchQuery: (search: string, from: string, to: string) => dispatch(setSearchQuery(search, from, to)),
});
const mapStateToProps = (state: any) => ({
  itemsCount: state.items.itemsCount,
  nightMode: state.theme.nightMode,
});
const connectedFinderBar = connect(mapStateToProps, dispatchToProps)(FinderBar);

export default Styled(connectedFinderBar)`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 50px;
  height: 100%;
  background-color: #1d1d1d;
  color: white;
  .moon {
    padding: 7px;
    margin: 0 4px;
  }
  @media(max-width: 500px) {
    padding: 4px;
  }
  form {
    width: 100;
    display: flex;
    flex-direction: column;
  }
  .itemsCount {
    margin: 20px;
    text-align: center;
  }
`;
