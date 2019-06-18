import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import Case from './Case/Case'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // width: 90%;
  // margin: 50px;
`

const Back = styled.a`
  color: blue;
`

function Details({ history }) {
  const [data, setData] = useState({ incidents: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const pathnameSplitted = window.location.pathname.split('incident/')
      if (pathnameSplitted.length < 2) {
        // FIXME redirect to 404
        throw new Error('Redirect to 404')
      }

      const id = pathnameSplitted[1]

      if (loading) {
        const url = `https://bikewise.org/api/v2/incidents/${id}`
        const response = await window.fetch(url)
        const results = await response.json()
        setData(results)
        setLoading(true)
      }
    }
    fetchData()
  }, [])
  const item = data.incident
  return (
    <Wrapper>
      <Back onClick={history.goBack}>Back</Back>
      {item && <Case key={item.id} item={item} />}
    </Wrapper>
  )
}

export default withRouter(Details)
