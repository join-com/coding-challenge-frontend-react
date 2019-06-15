import React from 'react'

export default function Details({ match }) {
  return <h1>Id {match.params.id}!</h1>
}
