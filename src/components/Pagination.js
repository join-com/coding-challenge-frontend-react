import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number
}

const defaultProps = {
    initialPage: 1,
    pageSize: 10
}

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var { items, pageSize } = this.props;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page, pageSize);
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager });
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;

        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <div class="pagination_align">
                <div class="pagination clearfix">
                    <div className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <a href="javascript:void(0)" onClick={() => this.setPage(1)}>First</a>
                    </div>
                    <div className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <a href="javascript:void(0)" onClick={() => this.setPage(pager.currentPage - 1)}>«</a></div>
                    {pager.pages.map((page, index) =>
                        <div key={index} className={pager.currentPage === page ? 'active' : ''}>
                            <a href="javascript:void(0)" onClick={() => this.setPage(page)}>{page}</a>
                        </div>
                    )}
                    <div className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <a href="javascript:void(0)" onClick={() => this.setPage(pager.currentPage + 1)}>»</a>
                    </div>
                    <div className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <a href="javascript:void(0)" onClick={() => this.setPage(pager.totalPages)}>Last</a>
                    </div>
                </div>
            </div>
        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;