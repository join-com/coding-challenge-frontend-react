import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

const tagsMap = {
    a: <a />,
    button: <button />
};

export default function Button({
    tag,
    children,
    ...attrs
}) {
    return cloneElement(
        tagsMap[tag],
        attrs,
        children
    );
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
