import * as React from 'react';

import Link from '../Hyperlink/ComHyperlink';

import { ApiPagination } from '../../interfaces/ApiPagination';

import './ComPaginator.scss';


interface IProps {
    urlPattern: string;
    pagination: ApiPagination;
    onNavigate: (page: number, evt?: React.MouseEvent) => void;
}

interface IState {

}

export default class ComPaginator extends React.Component<IProps, IState> {

    public readonly FRAME_SIZE = 2;

    constructor(props: IProps) {
        super(props);
    }

    private getPath(page: number): string {
        return this.props.urlPattern.replace(/\{page\}/g, page.toString());
    }

    private hasPrev(): boolean {
        return this.props.pagination.page > 1;
    }

    private hasNext(): boolean {
        return this.props.pagination.page < this.props.pagination.total_pages;
    }

    private navigate(page: number, evt?: React.MouseEvent) {
        if (this.props.pagination.page !== page) {
            this.props.onNavigate(page, evt);
        } else if (evt) {
            evt.preventDefault();
        }
    }

    private renderPages() {
        const tmp: number[][] = [ [], [], [] ];

        for (let i = 1; i <= this.props.pagination.total_pages; i++) {
            const ind = ( i < this.props.pagination.page - this.FRAME_SIZE )
                ? 0
                : ( ( i > this.props.pagination.page + this.FRAME_SIZE )
                    ? 2
                    : 1
                );
            tmp[ind].push(i);
        }

        return [
            this.renderPagesDropdown(tmp[0], -1),
            ...tmp[1].map((x, ind: number) => (
                <li key={ ind } className={ `page-item link${this.props.pagination.page === x ? ' active' : ''}` }>
                    <Link
                        to={this.getPath(x)}
                        className="page-link"
                        onClick={ (evt: React.MouseEvent) => { this.navigate(x, evt); } }
                        >
                        { x }
                    </Link>
                </li>
            )),
            this.renderPagesDropdown(tmp[2], -2),
        ];
    }

    private renderPagesDropdown(pages: any[], key: number) {
        return pages.length
            ? (
                <li key={ key } className="page-item">
                    <div>
                        <select className="page-link" onChange={ (evt) => { this.navigate(parseInt(evt.target.value, 10)); } }>
                            <option>. . . .</option>
                            { pages.map((x, ind) => <option key={ ind }>{ x }</option>) }
                        </select>
                    </div>
                </li>
            )
            : null;
    }

    public render(): React.ReactElement {
        return (
            <div className={ this.constructor.name }>
                <ul className="pagination">
                    <li className={ 'page-item link' + ( !this.hasPrev() ? ' disabled' : '' ) }>
                        <Link
                            to={ this.getPath(1) }
                            className="page-link"
                            onClick={ (evt: React.MouseEvent) => { this.navigate(1, evt); } }
                            >
                            &lt;&lt;
                        </Link>
                    </li>
                    <li className={ 'page-item link' + ( !this.hasPrev() ? ' disabled' : '' ) }>
                        <Link
                            to={ this.getPath(this.props.pagination.page - 1) }
                            className="page-link"
                            onClick={ (evt: React.MouseEvent) => { this.navigate(this.props.pagination.page - 1, evt); } }
                            >
                            &lt;
                        </Link>
                    </li>
                    { this.renderPages() }
                    <li className={ 'page-item link' + ( !this.hasNext() ? ' disabled' : '' ) }>
                        <Link
                            to={ this.getPath(this.props.pagination.page + 1) }
                            className="page-link"
                            onClick={ (evt: React.MouseEvent) => { this.navigate(this.props.pagination.page + 1, evt); } }
                            >
                            &gt;
                        </Link>
                    </li>
                    <li className={ 'page-item link' + ( !this.hasNext() ? ' disabled' : '' ) }>
                        <Link
                            to={ this.getPath(this.props.pagination.total_pages) }
                            className="page-link"
                            onClick={ (evt: React.MouseEvent) => { this.navigate(this.props.pagination.total_pages, evt); } }
                            >
                            &gt;&gt;
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }

}
