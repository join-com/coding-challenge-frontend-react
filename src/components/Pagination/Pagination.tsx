import React from 'react';
import styled from 'styled-components';

import { Button as ButtonBase } from 'ui/Button';
import { media } from 'ui/media';

export interface IProps {
    totalPages: number;
    current: number;
    changePage: (page: number) => void;
}

export const Container = styled.div`
    text-align: center;
`;

const Button = styled(ButtonBase)`
    margin-right: calc(15px + 3px);

    &:last-child {
        margin-right: 0;
    }
`;

export const BoundButton = styled(Button)`
    display: none;

    ${media.desktop`
    	display: inline-block;
	`}
`;

export const NumberButton = styled(Button)`
    display: none;

    ${media.tabletNDesktop`
    	display: inline-block;
	`}
`;

export class Pagination extends React.PureComponent<IProps> {
    public render() {
        return (
            <Container>
                {this.canBackward() && <BoundButton onClick={this.onFirstClick}>&lt;&lt;&nbsp;First</BoundButton>}
                {this.canBackward() && <Button onClick={this.onPrevClick}>&lt;&nbsp;Prev</Button>}

                {this.getPrevPage(2) && <NumberButton onClick={this.onPrev2Click}>{this.getPrevPage(2)}</NumberButton>}
                {this.getPrevPage() && <NumberButton onClick={this.onPrevClick}>{this.getPrevPage()}</NumberButton>}
                <NumberButton>{this.props.current}</NumberButton>
                {this.getNextPage() && <NumberButton onClick={this.onNextClick}>{this.getNextPage()}</NumberButton>}
                {this.getNextPage(2) && <NumberButton onClick={this.onNext2Click}>{this.getNextPage(2)}</NumberButton>}

                {this.canForward() && <Button onClick={this.onNextClick}>Next&nbsp;&gt;</Button>}
                {this.canForward() && <BoundButton onClick={this.onLastClick}>Last&nbsp;&gt;&gt;</BoundButton>}
            </Container>
        );
    }

    private onFirstClick = () => {
        this.props.changePage(1);
    };

    private onPrevClick = () => {
        this.props.changePage(this.props.current - 1);
    };

    private onPrev2Click = () => {
        this.props.changePage(this.props.current - 2);
    };

    private onNextClick = () => {
        this.props.changePage(this.props.current + 1);
    };

    private onNext2Click = () => {
        this.props.changePage(this.props.current + 2);
    };

    private onLastClick = () => {
        this.props.changePage(this.props.totalPages);
    };

    private canForward(offset = 1) {
        const { totalPages, current } = this.props;

        return current + offset <= totalPages;
    }

    private canBackward(offset = 1) {
        const { current } = this.props;

        return current - offset > 0;
    }

    private getNextPage(offset = 1) {
        const { current } = this.props;

        return this.canForward(offset) ? current + offset : null;
    }

    private getPrevPage(offset = 1) {
        const { current } = this.props;

        return this.canBackward(offset) ? current - offset : null;
    }
}
