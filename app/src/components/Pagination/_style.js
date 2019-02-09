import styled from 'styled-components';

export default styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    margin: 10px auto;
    font-weight: bold;
    max-width: 100%;
    overflow: hidden;

    .c-paginator__prev {
        border-right: 2px solid currentColor;

        &::before {
            content: "";
            width: 0.75em;
            height: 0.75em;
            border-bottom: 2px solid currentColor;
            border-left: 2px solid currentColor;
            transform: rotate(45deg);
        }
    }

    .c-paginator__next {
        border-left: 2px solid currentColor;

        &::after {
            content: "";
            width: 0.75em;
            height: 0.75em;
            border-bottom: 2px solid currentColor;
            border-left: 2px solid currentColor;

            transform: rotate(-135deg);
        }
    }

    .c-paginator__list {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        color: green;
    }

    .c-paginator__item {
        display: flex;
        align-items: center;
        padding: 0 5px;
        color: #000;
        font-size: 1em;
        white-space: nowrap;
        text-decoration: none;

        &.is-active {
            font-weight: 700;
            color: #bbb;
            cursor: default;
        }

        &.is-disabled {
            cursor: default;
            color: #bbb;
        }
    }
`;

