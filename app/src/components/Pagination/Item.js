import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function PaginatorItem({
    className,
    onChange,
    label,
    index,
    isActive
}) {
    const componentClassName = classnames('c-paginator__item', className, {
        'is-active': isActive
    });

    return (
        <a
            href="#"
            className={componentClassName}
            onClick={onChange(index)}
        >
            { label || index }
        </a>
    );
}

PaginatorItem.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    index: PropTypes.number,
    isActive: PropTypes.bool,
};
