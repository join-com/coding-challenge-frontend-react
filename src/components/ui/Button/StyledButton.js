import styled, { css } from "styled-components";
import { colors } from "../../../constants/styles";
import { defaultInputStyles } from "../../../helpers/stylesMixins";

const buttonHoverStyles = css`
  color: ${colors.primary};
`;

const StyledButton = styled.button`
  ${defaultInputStyles};
  text-align: center;
  margin-right: 0.5rem;
  &:hover {
    ${({ disabled }) => !disabled && buttonHoverStyles};
  }
`;

export default StyledButton;
