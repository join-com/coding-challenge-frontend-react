import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './pages/List/List'
import Details from './pages/Details/Details'
import Header from './components/Header/Header'

const AppWrapper = styled.div`
  margin: 10px;
`
const Body = styled.div`
  width: 90%;
  margin: 50px;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <div>
          <Header />
          <Body>
            <Route exact path="/" component={List} />
            <Route path="/incident/:id" component={Details} />
          </Body>
        </div>
      </Router>
    </AppWrapper>
  )
}

export default App
