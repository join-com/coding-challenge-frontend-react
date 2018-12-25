import { css } from "styled-components";
import { breakpoints } from "../constants/styles";

/** 
* media mixin, use in styled components as media.breakpointSize``
* for example 
  media.tablet`
    color: red;
  `;
*/
const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  /* eslint-disable no-param-reassign */
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
  /* eslint-enable no-param-reassign */
}, {});

export default media;
