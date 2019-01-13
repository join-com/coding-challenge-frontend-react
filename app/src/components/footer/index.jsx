import React from 'react'
import Container from '../shared/container'
import RowComponent from '../shared/row'
import ColComponent from '../shared/col'
import { List, ListItem } from '../shared/list'

const Footer = props => {
  return (
    <footer>
      <Container className="container-fluid bg-dark text-white my-2" splitLines={false}>
        <RowComponent>
          <ColComponent>
            <List>
              <ListItem>
                <h6>
                  <a
                    href="https://github.com/shahzaibalikhan/coding-challenge-frontend-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </h6>
              </ListItem>
              <ListItem>
                <p>React coding challenge</p>
              </ListItem>

              <ListItem>
                <h6>
                  <a
                    className="text-green ml-2"
                    href="https://github.com/shahzaibalikhan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shahzaib Ali Khan
                  </a>
                </h6>
              </ListItem>
            </List>
          </ColComponent>
          <hr />
        </RowComponent>
      </Container>
    </footer>
  )
}

export default Footer
