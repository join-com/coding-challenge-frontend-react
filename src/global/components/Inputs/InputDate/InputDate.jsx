import React from 'react';

import PropTypes from 'prop-types';

import { bemCls } from '../../../utils/ClassNameHelpers';

const InputDate = ({
  className, name, label, type, value, placeholder,
  onChange, onBlur,
}) => (
  <div className={`InputDate ${className}`}
  >
    <label
      key={name}
      className={bemCls(`InputDate ${className}`, '__label')}
    >
      {label}
      <input
        type={type}
        className={bemCls(`InputDate ${className}`, '__input')}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </label>
  </div>
);

export default InputDate;

InputDate.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

InputDate.defaultProps = {
  className: '',
  label: '',
  type: 'date',
  value: '',
  placeholder: 'MM/DD/YYYY',
  onChange: () => {},
  onBlur: () => {},
};
