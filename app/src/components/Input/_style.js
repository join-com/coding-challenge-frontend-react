import styled from 'styled-components';

export default styled.input`
    margin: 0;
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid #bbb;
    height: 30px;
    font-size: .9em;

    &.c-input--search {
        width: 400px;
    }

    &.c-input--date {
        width: 170px;
    }
`;
