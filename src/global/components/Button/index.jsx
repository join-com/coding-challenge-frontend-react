import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class ButtonWrapper extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, params } = this.props;
    onClick(params);
  }

  render() {
    return (
      <Button
        {...this.props}
        onClick={this.handleClick}
      />
    );
  }
}

ButtonWrapper.propTypes = {
  onClick: PropTypes.func,
  params: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

ButtonWrapper.defaultProps = {
  onClick: () => {},
  params: {},
};

export default ButtonWrapper;
