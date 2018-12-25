import React from "react";
import PropTypes from "prop-types";
import { Row } from "../ui/Layout/StyledLayout";
import Input from "../ui/Input";

function Filter({ onChange, value, disableInput }) {
  return (
    <Row>
      <Input
        disabled={disableInput}
        size="large"
        id="filter"
        name="filter"
        uppercase
        onChange={onChange}
        value={value}
      />
    </Row>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disableInput: PropTypes.bool
};

Filter.defaultProps = {
  value: "",
  disableInput: false
};

export default Filter;
