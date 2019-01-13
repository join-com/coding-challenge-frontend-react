import React from 'react'

export const List = ({ children }) => (
  <ul className="list-unstyled list-inline social text-center">{children}</ul>
)

export const ListItem = ({ children }) => (
  <li className="list-item">{children}</li>
)

export const ListGroup = ({ children }) => (
  <li className="list-group">{children}</li>
)

export const ListGroupItem = ({ children }) => (
  <li className="list-group-item">{children}</li>
)
