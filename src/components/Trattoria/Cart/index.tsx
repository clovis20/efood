import { Botao } from '../Product/styles'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  TextCart,
  CartItem
} from './styles'
import { RootReducer } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../../store/reducers/cart'

const Cart = () => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <TextCart>
                <p>{item.nome}</p>
                <span>{formataPreco(item.preco)}</span>
              </TextCart>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor Total <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <Botao title="Clique aqui para continuar com a compra" type="button">
          Continuar com a entrega
        </Botao>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
