import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row } from "../ui/Layout/StyledLayout";
import Input from "../ui/Input";
import Text from "../ui/Text";
import Select from "../ui/Select";
import { ITEMS_PER_PAGE_OPTIONS } from "../../constants/global";

function Filter({ onChange, value, disableInput, itemsPerPage, changeShowItemsPerPage, totalIncidentsLength }) {
  return (
    <Fragment>
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
      <Row>
        <Select
          label="Show item per page: "
          onChange={changeShowItemsPerPage}
          id="item_per_page"
          name="item_per_page"
          options={ITEMS_PER_PAGE_OPTIONS}
          value={itemsPerPage}
        />
        <Text>Total: {totalIncidentsLength}</Text>
      </Row>
    </Fragment>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disableInput: PropTypes.bool,
  totalIncidentsLength: PropTypes.number.isRequired
};

Filter.defaultProps = {
  value: "",
  disableInput: false
};

export default Filter;
