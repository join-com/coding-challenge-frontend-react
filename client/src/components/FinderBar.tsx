import React, { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Styled from "styled-components";
import { connect } from "react-redux";
import Input from "./Input";
import Button from "./Button";

interface IFinderBarProps {
    className?: string;
    itemsCount? :number;
}

const FinderBar: FC<IFinderBarProps> = ({ className = "", itemsCount }) =>
<div className={className}>
  <form>
      <Input type="text" placeholder="Search" postfix="A" />
      <Input type="date" placeholder="From" postfix={<FaCalendarAlt />}/>
      <Input type="date" placeholder="To" postfix={<FaCalendarAlt />}/>
      <Button>Find cases</Button>
  </form>
  <div className='itemsCount'>{itemsCount || '-'} Cases found</div>
</div>;

const mapStateToProps = (state: any) => ({
  itemsCount: state.items.itemsCount
})
const connectedFinderBar = connect(mapStateToProps)(FinderBar);

export default Styled(connectedFinderBar)`
  form {
    display: flex;
    justify-content: center;
  }
  .itemsCount {
    text-align: center;
  }
`;
