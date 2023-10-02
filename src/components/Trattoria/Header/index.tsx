import { Link } from 'react-router-dom'

import { Headerbar, CartButton } from './styles'
import headerImg from '../../../assets/images/fundo.png'

import logo from '../../../assets/images/logo.svg'

import { open } from '../../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Headerbar style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
      </div>
      <div className="textos">
        <a href="/">Restaurantes</a>
        <CartButton onClick={openCart}>
          {items.length} Produto(s) no carrinho
        </CartButton>
      </div>
    </Headerbar>
  )
}

export default Header
