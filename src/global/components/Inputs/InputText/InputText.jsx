import React from 'react';

import PropTypes from 'prop-types';

import { bemCls } from '../../../utils/ClassNameHelpers';

const InputText = ({
  className, name, label, type, value, placeholder,
  onChange, onBlur,
}) => (
  <div className={`InputText ${className}`}
  >
    <label
      key={name}
      className={bemCls(`InputText ${className}`, '__label')}
    >
      {label}
      <input
        type={type}
        className={bemCls(`InputText ${className}`, '__input')}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </label>
  </div>
);

export default InputText;

InputText.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

InputText.defaultProps = {
  className: '',
  label: '',
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
};
