import * as React from 'react';
import { Link } from 'react-router-dom';

import './ComHyperlink.scss';


interface IProps {
    to: string;
    className?: string;
    onClick?: Function;
    children?: any;
}

interface IState {

}

export default class ComHyperlink extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    private onClick(evt: React.MouseEvent): void {
        if (this.props.onClick instanceof Function) {
            this.props.onClick(evt);
        }
        window.scrollTo(0, 0);
    }

    public render(): React.ReactElement {
        return (
            <Link to={this.props.to} className={this.props.className} onClick={ (evt: React.MouseEvent) => this.onClick(evt) }>
                { this.props.children }
            </Link>
        );
    }

}
