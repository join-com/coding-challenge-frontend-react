import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadCases } from './ducks'

interface Props {
  requestCases: () => void
}

const CaseListView = ({ requestCases }: Props) => {
  useEffect(() => {
    requestCases()
  })
  return <div>Main Page</div>
}

export const CaseList = connect(
  null,
  { requestCases: loadCases.request },
)(CaseListView)
