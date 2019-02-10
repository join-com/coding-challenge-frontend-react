import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *:after,
    *:before {
        box-sizing: border-box;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        font: 16px/1.2 'Roboto', sans-serif;
        margin: 0;
        background-color: #eceff1;
    }

    a {
        color: #1187d2;
    }

    .c-map {
        margin-bottom: 20px;

        &__loader,
        &__element  {
            height: 400px;
        }
    }
`;
