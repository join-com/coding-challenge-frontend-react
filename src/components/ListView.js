import React from 'react';

const listView = props => (
  <ul>
    {' '}
    {props.items.map(item => (
      <li key={item.id}>
        <div>{item.title}</div>
        <div>{item.description}</div>
      </li>
    ))}
  </ul>
);

export default listView;
