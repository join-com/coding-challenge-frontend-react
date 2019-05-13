import React from 'react';
import PropTypes from 'prop-types';

const List = ({items, ...rest}) =>  (
  <ul {...rest}>
    {items.map((item, key) => <li key={key}>{item}</li>)}
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
