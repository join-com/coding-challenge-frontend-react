import React, { Component } from 'react';

import PropTypes from 'prop-types';

import InputDate from './InputDate';

class InputDateWrapper extends Component {
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
      <InputDate
        {...this.props}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default InputDateWrapper;

InputDateWrapper.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

InputDateWrapper.defaultProps = {
  name: '',
  value: '',
  onChange: () => {},
  onBlur: () => {},
};
