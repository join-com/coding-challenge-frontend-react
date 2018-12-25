import React from "react";
import PropTypes from "prop-types";
import StyledHeading from "./StyledHeading";

const Heading = ({ children, level, uppercase, bold }) => (
  <StyledHeading level={level} uppercase={uppercase ? 1 : 0} bold={bold ? 1 : 0}>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /** Represents type of the header */
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /** Uppercase text */
  uppercase: PropTypes.bool,
  /** Should the text be bold */
  bold: PropTypes.bool
};
Heading.defaultProps = {
  level: 1,
  uppercase: false,
  bold: false
};

export default Heading;
