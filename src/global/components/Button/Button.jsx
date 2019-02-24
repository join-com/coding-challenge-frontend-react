import React from 'react';
import PropTypes from 'prop-types';

import { bemCls } from '../../utils/ClassNameHelpers';

import './Button.css';

const Button = ({
  className, text, type, disabled, onClick,
}) => {
  if ((onClick || type === 'submit') && text) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type}
        className={`Button ${className} ${
          bemCls(`Button ${className}`, '--disabled', disabled)}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text
          && (
            <div className={`${bemCls(`Button ${className}`, '__text')} ${
              bemCls(`Button ${className}`, '__text--disabled', disabled)}`}
            >
              {text}
            </div>
          )
        }
      </button>
    );
  }
  return null;
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  text: '',
  type: 'button',
  disabled: false,
  onClick: undefined,
};
