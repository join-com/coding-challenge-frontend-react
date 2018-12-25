import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, Label } from "./StyledSelect";

function Select({ label, id, name, options, onChange, value }) {
  return (
    <div>
      {label && (
        <Label as="label" htmlFor={id}>
          {label}
        </Label>
      )}
      <StyledSelect name={name} id={id} onChange={onChange} value={value}>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Select.defaultProps = {
  label: "",
  options: [],
  value: ""
};

export default Select;
