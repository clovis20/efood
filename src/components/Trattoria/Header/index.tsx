import { Link } from 'react-router-dom'

import { Headerbar, Text } from './styles'
import headerImg from '../../../assets/images/fundo.png'

import logo from '../../../assets/images/logo.svg'

const Header = () => (
  <Headerbar style={{ backgroundImage: `url(${headerImg})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
    </div>
    <div className="textos">
      <a href="/">Restaurantes</a>
      <Text>0 Produto(s) no carrinho</Text>
    </div>
  </Headerbar>
)

export default Header
