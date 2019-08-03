import React from 'react';
import styled from 'styled-components';

import { Button as ButtonBase } from 'ui/Button';
import { media } from 'ui/utils';

export interface IProps {
    totalPages: number;
    currentPage: number;
    changePage: (from: number, to: number, totalPages: number) => void;
}

export const Container = styled.div`
    text-align: center;
    margin: 15px 0;
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

export const CurrentPageButton = styled(NumberButton)`
    background-color: rgba(0, 0, 0, 0.1);
`;

export class Pagination extends React.PureComponent<IProps> {
    public static defaultProps = {
        totalPages: 0,
    };

    public render() {
        return (
            <Container>
                {this.canBackward() && <BoundButton onClick={this.onFirstClick}>&lt;&lt;&nbsp;First</BoundButton>}
                {this.canBackward() && <Button onClick={this.onPrevClick}>&lt;&nbsp;Prev</Button>}

                {this.getPrevPage(2) && <NumberButton onClick={this.onPrev2Click}>{this.getPrevPage(2)}</NumberButton>}
                {this.getPrevPage() && <NumberButton onClick={this.onPrevClick}>{this.getPrevPage()}</NumberButton>}
                <CurrentPageButton>{this.props.currentPage}</CurrentPageButton>
                {this.getNextPage() && <NumberButton onClick={this.onNextClick}>{this.getNextPage()}</NumberButton>}
                {this.getNextPage(2) && <NumberButton onClick={this.onNext2Click}>{this.getNextPage(2)}</NumberButton>}

                {this.canForward() && <Button onClick={this.onNextClick}>Next&nbsp;&gt;</Button>}
                {this.canForward() && <BoundButton onClick={this.onLastClick}>Last&nbsp;&gt;&gt;</BoundButton>}
            </Container>
        );
    }

    private changePage(page: number) {
        const { currentPage, totalPages } = this.props;

        this.props.changePage(currentPage, page, totalPages);
    }

    private onFirstClick = () => {
        this.changePage(1);
    };

    private onPrevClick = () => {
        this.changePage(this.props.currentPage - 1);
    };

    private onPrev2Click = () => {
        this.changePage(this.props.currentPage - 2);
    };

    private onNextClick = () => {
        this.changePage(this.props.currentPage + 1);
    };

    private onNext2Click = () => {
        this.changePage(this.props.currentPage + 2);
    };

    private onLastClick = () => {
        const { totalPages } = this.props;

        this.changePage(totalPages);
    };

    private canForward(offset = 1) {
        const { totalPages, currentPage } = this.props;

        return currentPage + offset <= totalPages;
    }

    private canBackward(offset = 1) {
        const { currentPage, totalPages } = this.props;

        return totalPages > 0 && currentPage - offset > 0;
    }

    private getNextPage(offset = 1) {
        const { currentPage } = this.props;

        return this.canForward(offset) ? currentPage + offset : null;
    }

    private getPrevPage(offset = 1) {
        const { currentPage } = this.props;

        return this.canBackward(offset) ? currentPage - offset : null;
    }
}
