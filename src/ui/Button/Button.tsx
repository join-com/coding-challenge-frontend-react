import React from 'react';
import { space, width, fontSize, color, WidthProps, SpaceProps } from 'styled-system';
import styled, { ThemeProvider } from 'styled-components';
import styledTs from 'styled-components-ts';
import { theme } from '../theme';

type StyledButtonProps = WidthProps & SpaceProps;

export const StyledButton = styledTs<StyledButtonProps>(styled.div)`
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

interface State {
    test?: boolean;
}

export class Button extends React.PureComponent<Props, State> {
    public state: State = {};
    public componentDidMount() {
        this.setState({ test: true });
    }
    public render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledButton>{this.props.text}</StyledButton>
            </ThemeProvider>
        );
    }
}
