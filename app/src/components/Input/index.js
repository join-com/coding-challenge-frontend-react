import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import StyledComponent from './_style';

const dateHandlers = {
    type: 'text',
    onFocus: e => e.target.type = 'date',
    onBlur: e => e.target.type = 'text'
};

export default function Input({
    className,
    classNameMod,
    ...rest
}) {
    const componentClassName = classnames('c-input', className, {
        [`c-input--${classNameMod}`]: classNameMod
    });

    return (
        <StyledComponent
            className={componentClassName}
            {...rest}
            {...rest.type === 'date'? dateHandlers : {}}
        />
    );
}

Input.propTypes = {
    className: PropTypes.string
};
