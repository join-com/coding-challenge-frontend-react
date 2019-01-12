import React from 'react'

const Footer = props => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-item">
                <p className="h6">
                  <a
                    href="https://github.com/shahzaibalikhan/coding-challenge-frontend-react"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </p>
              </li>
              <li className="list-item">
                <p>React coding challenge</p>
              </li>

              <li className="list-item">
                <p className="h6">
                  <a
                    className="text-green ml-2"
                    href="https://github.com/shahzaibalikhan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shahzaib Ali Khan
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    </footer>
  )
}

export default Footer
