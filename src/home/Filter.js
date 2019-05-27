import React from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import {
  KeyboardDatePicker,
} from "@material-ui/pickers";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { fetchAllIncidents, setFromFilter, setKeywordFilter, setToFilter } from "../api/apiClient";
import { bindActionCreators } from "redux";

const spacerStyle = { width: "16pt" };
const parentStyle = { display: "flex", alignItems: "flex-end", justifyContent: "space-between" };
const buttonStyle = { marginBottom: "8pt" };

function Filter(props) {
  function handleKeywordChange(keyword) {
    props.setKeywordFilter(keyword);
  }

  function handleFromChange(from) {
    props.setFromFilter(from);
  }

  function handleToChange(to) {
    props.setToFilter(to);
  }

  function handleFilterClick() {
    props.fetchAllIncidents({
      keyword: props.keyword,
      from: props.from,
      to: props.to
    })
  }

  return (
    <div style={parentStyle}>
      <TextField id="filter-keyword"
                 label="Filter"
                 value={props.keyword}
                 onChange={event => handleKeywordChange(event.target.value)}
                 margin="normal" />

      <div style={spacerStyle} />

      <KeyboardDatePicker margin="normal"
                          label="Date picker"
                          value={props.from ? props.from : undefined}
                          onChange={handleFromChange} />

      <div style={spacerStyle} />

      <KeyboardDatePicker margin="normal"
                          label="Date picker"
                          value={props.to ? props.to : undefined}
                          onChange={handleToChange} />

      <div style={spacerStyle} />

      <Button style={buttonStyle} variant="outlined" aria-label="Search" onClick={() => handleFilterClick()}>
        <SearchIcon />
        Search
      </Button>

    </div>

  );
}

const mapStateToProps = state => state.filter;

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllIncidents,
  setToFilter,
  setFromFilter,
  setKeywordFilter
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);