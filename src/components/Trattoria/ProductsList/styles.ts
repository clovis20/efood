import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.section`
  background-color: ${cores.fundo1};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  max-width: 1366px;
  padding-top: 56px;
  padding-bottom: 120px;
  padding-left: 171px;
  padding-right: 171px;
  width: 100%;
  margin: auto;

  li {
    width: 100%
    max-width: 100%
  }
`
