import { css } from 'styled-components';

const mediaQuery = (...query) => (...rules) =>
    css`
        @media ${css(...query)} {
            ${css(...rules)}
        }
    `;

export { mediaQuery };
