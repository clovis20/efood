import styled from 'styled-components'
import { cores } from '../../../styles'

export const Restbar = styled.header`
  font-size: 26px;
  height: 280px;
  color: ${cores.branca};
  margin: auto;
  background-size: cover;

  .container {
    max-width: 1366px;
    padding: 33px 171px;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-weight: bold;
    }

    h3 {
      font-weight: 100;
    }
  }
`
