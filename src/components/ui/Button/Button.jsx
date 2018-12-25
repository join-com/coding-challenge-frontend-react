import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./StyledButton";

const Button = ({ children, uppercase, onClick, size, type, disabled }) => (
  <StyledButton size={size} uppercase={uppercase} onClick={onClick} type={type} disabled={disabled}>
    {children}
  </StyledButton>
);
Button.propTypes = {
  /** Button content */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /** Button size */
  size: PropTypes.oneOf(["small", "normal", "large"]),
  /** Is text uppercase */
  uppercase: PropTypes.bool,
  /** on click callback */
  onClick: PropTypes.func,
  /** button type */
  type: PropTypes.string,
  /** is button disabled */
  disabled: PropTypes.bool
};
Button.defaultProps = {
  size: "normal",
  type: "button",
  uppercase: true,
  onClick: () => {}
};
export default Button;
