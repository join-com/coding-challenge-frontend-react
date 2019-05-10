import styled from '@/libs/styled-components'
import PoliceSvg from './assets/polizei.svg'

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 120px;
`

export const PoliceEmblem = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  width: 80px;
  height: 120px;
  background: ${`url(${PoliceSvg})`};
  background-size: 60px;
  background-position: center;
  background-repeat: no-repeat;
`

export const TextContainer = styled.div`
  text-align: left;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
