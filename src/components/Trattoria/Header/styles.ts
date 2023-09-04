import styled from 'styled-components'
import { cores } from '../../../styles'

export const Headerbar = styled.header`
  color: ${cores.laranja};
  height: 186px;
  align-items: center;

  .container {
    padding-top: 64px;
    display: flex;
    justify-content: center;
  }

  .textos {
    margin-top: -100px;
    padding: 64px 171px;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${cores.laranja};
    font-weight: bold;
    font-size: 18px;
  }
`

export const Text = styled.h2`
  font-weight: bold;
  font-size: 18px;
`
