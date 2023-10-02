import styled from 'styled-components'
import { cores } from '../../../styles'
import { Botao } from '../Product/styles'
import lixeira from '../../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  color: ${cores.fundo2};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  width: 360px;
  background-color: ${cores.laranja};
  z-index: 1;
  padding: 32px 8px 16px 8px;

  ${Botao} {
    position: relative;
    max-width: 100%;
    width: 100%;
    //font-size: 16px;
  }
`

export const Prices = styled.p`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.fundo2};
  margin-top: 40px;
  margin-bottom: 8px;
  justify-content: space-between;
`

export const TextCart = styled.p`
  font-size: 18px;
  color: ${cores.laranja};

  p {
    font-weight: bold;
    margin-bottom: 16px;
  }
  span {
    font-size: 14px;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px;
  background-color: ${cores.fundo2};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 8px;
    margin-right: 8px;
    cursor: pointer;
  }
`
