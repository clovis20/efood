import styled from 'styled-components'
import { cores } from '../../styles'

export const Headerbar = styled.header`
  color: ${cores.laranja};
  height: 384px;

  .container {
    padding-top: 64px;
    padding-bottom: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
`
