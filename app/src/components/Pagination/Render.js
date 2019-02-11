import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import StyledComponent from './_style';

export default function PaginatorRender(props) {
    const {
        pages,
        isNavigation,
        getActivePage,
        getPages,
        handleChangePage
    } = props;

    if (!pages || pages <= 1) {
        return null;
    }

    const activePage = getActivePage();
    const result = getPages(activePage);
    const prevNavIndex = activePage > 1 ? activePage - 1 : undefined;
    const nextNavIndex = activePage < pages ? activePage + 1 : undefined;

    return (
        <StyledComponent className="c-paginator">
            {
                isNavigation && activePage > 1 && (
                    <Item
                        className="c-paginator__prev"
                        index={prevNavIndex}
                        label="Previous page"
                        onChange={handleChangePage}
                    />
                )
            }
            {
                result.map((resultItem, i) => (
                    <Item
                        key={i}
                        index={resultItem[0]}
                        label={resultItem[1]}
                        onChange={handleChangePage}
                        isActive={resultItem[0] === activePage}
                    />
                ))
            }
            {
                isNavigation && activePage < pages && (
                    <Item
                        className="c-paginator__next"
                        index={nextNavIndex}
                        label="Next page"
                        onChange={handleChangePage}
                    />
                )
            }
        </StyledComponent>
    );
}

PaginatorRender.propTypes = {
    pages: PropTypes.number,
    isNavigation: PropTypes.bool,
    onChange: PropTypes.func,
    activePage: PropTypes.number,
    getActivePage: PropTypes.func,
    getPages: PropTypes.func,
    handleChangePage: PropTypes.func
};
