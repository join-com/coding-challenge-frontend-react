import React, { Component } from 'react'
import Error from '../components/error'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />
    }

    return this.props.children
  }
}

export default ErrorBoundary
