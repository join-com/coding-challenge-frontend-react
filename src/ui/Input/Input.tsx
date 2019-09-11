import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

// styles defined globally in App.css
export const StyledInput = styled.input``;

interface Props {
    placeholder: string;
    value: string;
}

export class Input extends React.PureComponent<Props> {
    public render() {
        const { ...rest } = this.props;

        const Input = <StyledInput {...rest} />;

        return <ThemeProvider theme={theme}>{Input}</ThemeProvider>;
    }
}
