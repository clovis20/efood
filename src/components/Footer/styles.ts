import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.fundo2};
  padding: 32px 0;
  font-size: 10px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  .links {
    margin-left: 8px;
  }
`
export const Descricao = styled.p`
  text-align: center;
`
