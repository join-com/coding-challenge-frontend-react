import React from 'react'
import PropTypes from 'prop-types'

const TotalFound = ({ amount }) => (
  <div>
    Total: {amount}
  </div>
)

TotalFound.propTypes = {
  amount: PropTypes.number
}

TotalFound.defaultProps = {
  amount: 0
}

export default TotalFound
