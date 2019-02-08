import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: row;
    font-size: .9em;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bbb;

    .c-incident__img {
        width: 100px;
        height: 100px;
        margin-right: 20px;
        flex-grow: 0;
        flex-shrink: 0;

        &.is-empty {
            border: 1px solid #bbb;
        }
    }

    .c-incident__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .c-incident__title {
        margin: 0;
        font-weight: 600;
        font-size: 1.2em;
    }

    .c-incident__footer {
        font-style: italic;
    }
`;
