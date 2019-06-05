import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import { media } from 'ui/media';
import { Button as ButtonBase } from 'ui/Button';

import 'react-datepicker/dist/react-datepicker.css';

interface IProps {
    submit: (query?: string, from?: Date | null, to?: Date | null) => void;
}

interface IState {
    query?: string;
    from?: Date | null;
    to?: Date | null;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: -5px -5px;
`;

const QueryBox = styled.input`
    margin: 5px 5px;
    flex-grow: 1;
    min-width: 220px;

    ${media.mobileNTablet`
		width: 100%;
	`}
`;

const DatePickerWrapper = styled.div`
    margin: 5px 5px;

    & input {
        width: 180px;
    }

    ${media.mobile`
		width: calc(50% - 10px);

		& > div::first-child {
			width: 100%;
		}

		& > div:first-child > div {
			width: 100%;
		}

		& input {
			width: 100%;
		}
	`}
`;

const Button = styled(ButtonBase)`
    min-width: 120px;
    margin: 5px 5px;

    ${media.mobile`
		text-align: center;
		width: 100%;
	`}
`;

export class Search extends React.PureComponent<IProps, IState> {
    public state: IState = {};

    public render(): React.ReactElement {
        const { from, to } = this.state;

        return (
            <Container>
                <QueryBox placeholder="Search case descriptions" onChange={this.onChangeQuery} />
                <DatePickerWrapper>
                    <DatePicker placeholderText={'from'} selected={from} onChange={this.onChangeFrom} />
                </DatePickerWrapper>
                <DatePickerWrapper>
                    <DatePicker placeholderText={'to'} selected={to} onChange={this.onChangeTo} />
                </DatePickerWrapper>
                <Button onClick={this.onSubmit}>Find cases</Button>
            </Container>
        );
    }

    private onSubmit = () => {
        const { submit } = this.props;
        const { query, from, to } = this.state;

        submit(query, from, to);
    };

    private onChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        this.setState({ query: value });
    };

    private onChangeFrom = (value?: Date | null) => {
        const { to } = this.state;

        if (!to || (value && value < to)) {
            this.setState({ from: value });
        }
    };

    private onChangeTo = (value?: Date | null) => {
        const { from } = this.state;

        if (!from || (value && value > from)) {
            this.setState({ to: value });
        }
    };
}
