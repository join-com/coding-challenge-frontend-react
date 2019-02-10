import styled from 'styled-components';

export const Button = styled.button`
    font-weight: 400;
    text-transform: uppercase;
    margin: 0;
    cursor: pointer;
    border: 0;
    background: none;
    padding: 0 10px;
    color: #fff;
    background-color: #1187d2;
`;

export const Link = Button.withComponent('a');
