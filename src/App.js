import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './pages/List'
import Details from './pages/Details'
import Header from './components/Header/Header'

const AppWrapper = styled.div``

function App() {
  return (
    <AppWrapper>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/case/:id" component={Details} />
        </div>
      </Router>
    </AppWrapper>
  )
}

export default App
