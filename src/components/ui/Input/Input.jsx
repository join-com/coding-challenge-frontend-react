import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./StyledInput";

const Input = ({ disabled, placeholder, value, onChange, type, name, size, uppercase }) => (
  <StyledInput
    name={name}
    id={name}
    type={type}
    placeholder={placeholder}
    value={value}
    disabled={disabled}
    onChange={onChange}
    size={size}
    uppercase={uppercase}
  />
);

Input.propTypes = {
  /** Is input disabled */
  disabled: PropTypes.bool,
  /** Input placeholder text */
  placeholder: PropTypes.string,
  /** Input value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Function that changes input value */
  onChange: PropTypes.func.isRequired,
  /** input type */
  type: PropTypes.string,
  /** Input text uppercase */
  uppercase: PropTypes.bool,
  /** Input name */
  name: PropTypes.string.isRequired,
  /** Input id */
  id: PropTypes.string.isRequired,
  /** Input size */
  size: PropTypes.oneOf(["normal", "large"])
};

Input.defaultProps = {
  value: "",
  placeholder: "",
  disabled: false,
  uppercase: false,
  type: "text",
  size: "normal"
};

export default Input;
