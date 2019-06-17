
import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  background-color: 'blue';
`
export default function SearchButton({onClick}) {
  return <Button onClick={onClick}>Find cases</Button>
}
