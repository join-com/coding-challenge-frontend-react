import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  margin-right: 15px;
`

export default function SearchCaseInput({ onChange, value }) {
  return (
    <Input
      onChange={onChange}
      placeholder="Search case description"
      value={value}
    />
  )
}
