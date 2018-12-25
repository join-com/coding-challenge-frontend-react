import { css } from "styled-components";
import mediaQuery from "./mediaQuery";
import { breakpoints } from "../constants/styles";

describe("mediaQuery helper", () => {
  const removeWhitespace = items => items.map(item => item.replace(/\s+/g, ""));
  it("should return correct value for the tablet media query", () => {
    const styles = `padding: 0 10px;`;
    const media = mediaQuery.tablet`${styles}`;
    const expectResult = css`
      @media (min-width: ${breakpoints.tablet}px) {
        ${css([`${styles}`])};
      }
    `;
    expect(removeWhitespace(media)).toEqual(removeWhitespace(expectResult));
  });
  it("should return correct value for the  desktop media query", () => {
    const styles = `display: flex; margin: 10px`;
    const media = mediaQuery.desktop`${styles}`;
    const expectResult = css`
      @media (min-width: ${breakpoints.desktop}px) {
        ${css([`${styles}`])};
      }
    `;
    expect(removeWhitespace(media)).toEqual(removeWhitespace(expectResult));
  });
});
