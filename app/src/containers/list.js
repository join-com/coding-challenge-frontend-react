import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListRecord from '../components/list-record'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const item = {
  image: '',
  title: 'dummy title',
  description:
    'Phasellus maximus, turpis eu aliquam finibus, odio arcu interdum libero, in dapibus dolor enim ut metus. Etiam cursus nunc ut felis dictum efficitur. Praesent vitae ex eu urna placerat ornare. Phasellus sed gravida neque. Mauris ac ex pretium, pulvinar sapien nec, sodales tortor. Duis finibus diam eu egestas sollicitudin. Morbi mollis sit amet turpis efficitur pulvinar.',
  date: 1547156439,
  city: 'Berlin',
  postalCode: 123456,
  country: 'DE'
}

class Root extends Component {
  render() {
    return (
      <div className="container">
        <div className="list-group">
          <ListRecord item={item} />
          <ListRecord item={item} />
          <ListRecord item={item} />
          <ListRecord item={item} />
          <ListRecord item={item} />
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
