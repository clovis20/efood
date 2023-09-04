import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 0;
  background-color: ${cores.fundo1};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 48px;
  column-gap: 80px;
  max-width: 1024px;
  margin: 0 auto;
`
