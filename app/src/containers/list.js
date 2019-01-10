import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListRecord from '../components/list-record'
import Loading from '../components/loading'

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

const NoResult = props => {
  return <div className="container">No results</div>
}
class List extends Component {
  render() {
    if (true) {
      return <NoResult />
    }
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

connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

const ListWithLoading = Loading(List)

class ListLoader extends Component {
  // TODO: refactor temp loading component
  constructor(props) {
    super(props)
    this.state = this.props
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render() {
    return <ListWithLoading isLoading={this.state.loading} />
  }
}

export default ListLoader
