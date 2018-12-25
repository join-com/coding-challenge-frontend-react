import React from "react";
import PropTypes from "prop-types";

import StyledText from "./StyledText";

const Text = ({ children, size, bold, uppercase }) => (
  <StyledText uppercase={uppercase} size={size} bold={bold}>
    {children}
  </StyledText>
);

Text.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large", "extraLarge"]),
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

Text.defaultProps = {
  size: "normal",
  bold: false,
  uppercase: false
};

export default Text;
