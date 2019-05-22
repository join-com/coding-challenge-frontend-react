import React from 'react';
import { space, width, fontSize, color, WidthProps, SpaceProps } from 'styled-system';
import styled, { ThemeProvider } from 'styled-components';
import styledTs from 'styled-components-ts';
import { theme } from '../theme';

type StyledProps = WidthProps & SpaceProps;

export const StyledButton = styledTs<StyledProps>(styled.button)`
	${space}
	${width}
	${fontSize}
	${color}
`;

StyledButton.defaultProps = {
    p: 2,
    color: 'orange',
};

interface Props {
    text: string;
    onClick: () => void;
}

export class Button extends React.PureComponent<Props> {
    public render() {
        const { text, onClick, ...rest } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <StyledButton onClick={onClick} {...rest}>
                    {text}
                </StyledButton>
            </ThemeProvider>
        );
    }
}
