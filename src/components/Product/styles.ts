import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.branca2};
  border: 1px solid ${cores.laranja};

  max-width: 472px;

  > img {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 42px;
  margin-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Notas = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`

export const TituloDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 8px;

  .display {
    display: flex;
    }
  }
`
