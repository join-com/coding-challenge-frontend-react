import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { fontSize, space } from 'styled-system';
import { theme } from '../theme';

export const StyledButton = styled.div`
    display: inline-block;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.9);
    background-color: #ffffff;
    cursor: pointer;
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.9);
    border: 3px solid rgba(0, 0, 0, 0.9);

    line-height: 14px;
    height: 30px;
    user-select: none;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;

    &:active {
        background-color: rgba(0, 0, 0, 0.9);
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.9);
        border: 3px solid transparent;
        color: #ffffff;
    }
    ${fontSize}
    ${space}
`;

interface Props {
    onClick?: () => void;
}

export class Button extends React.PureComponent<Props> {
    public render() {
        const { children, onClick, ...rest } = this.props;

        const button = (
            // @ts-ignore
            <StyledButton fontSize={[2]} px={5} py={2} onClick={onClick} {...rest}>
                {children}
            </StyledButton>
        );

        return <ThemeProvider theme={theme}>{button}</ThemeProvider>;
    }
}
