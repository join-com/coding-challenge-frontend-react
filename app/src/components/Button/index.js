import React from 'react';
import PropTypes from 'prop-types';

import {
    Link,
    Button as ButtonStyledComponent
} from './_style';

export default function Button({
    tag,
    children,
    ...attrs
}) {
    const Component = tag === 'a' ? Link : ButtonStyledComponent;

    return <Component {...attrs}>{ children }</Component>;
}

Button.propTypes = {
    type: PropTypes.oneOf(['reset', 'button', 'submit']),
    tag: PropTypes.oneOf(['a', 'button']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    tag: 'button',
    type: 'button'
};
