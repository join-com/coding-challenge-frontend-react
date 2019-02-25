import React, { Component } from 'react';

import PropTypes from 'prop-types';

import InputText from './InputText';

class InputTextWrapper extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    const { name, onChange } = this.props;
    onChange(name, event.target.value);
  }

  handleBlur() {
    const { value, name, onBlur } = this.props;
    onBlur(name, value);
  }

  render() {
    return (
      <InputText
        {...this.props}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default InputTextWrapper;

InputTextWrapper.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

InputTextWrapper.defaultProps = {
  name: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
};
