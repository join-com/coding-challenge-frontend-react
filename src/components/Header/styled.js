import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 20px;
`

const Title = styled.h1`
  font-size: 44px;
  margin: 0 0 10px 0;
`

const Subtitle = styled.h3`
  font-size: 30px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export { Container, Logo, Content, Title, Subtitle }
