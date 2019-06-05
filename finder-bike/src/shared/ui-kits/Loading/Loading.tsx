import styled from 'styled-components'

const Loading = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid rgba(29, 161, 242, 0.2);
  border-left-color: rgb(29, 161, 242);
  border-radius: 50%;
  background: transparent;
  animation-name: rotate-s-loader;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: linear;
  position: relative;
  ${({ center }) => center && 'margin: 0 auto;'}

  @keyframes rotate-s-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default Loading