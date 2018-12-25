import styled from "styled-components";
import { defaultInputStyles, hoverBorderStyles } from "../../../helpers/stylesMixins";

export const StyledInput = styled.input`
  ${defaultInputStyles};
  width: 100%;
  box-sizing: border-box;
  &:focus {
    ${({ disabled }) => !disabled && hoverBorderStyles};
  }
`;
