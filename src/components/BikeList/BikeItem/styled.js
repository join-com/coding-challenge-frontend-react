import styled from 'styled-components'

const Container = styled.li`
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin: 20px 0;
`

const Content = styled.div`
  padding: 14px;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
`

const Address = styled.p`
  font-weight: bold;
`

export {
  Container,
  Content,
  Image,
  Address
}
