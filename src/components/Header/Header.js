import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import logo from './logo.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 32px;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
`

const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
`

export default function Header() {
  return (
    <Wrapper>
      <NavLink to="/">
        <Logo src={logo} alt="logo" />
      </NavLink>
      <div>
        <Title>Police Departement of Berlin</Title>
        <SubTitle>Stolen bikes</SubTitle>
      </div>
    </Wrapper>
  )
}
