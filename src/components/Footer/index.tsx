import { Link } from 'react-router-dom'
import { Container, FooterSection, Descricao } from './styles'
import logo from '../../assets/images/logo.svg'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/face.png'
import twit from '../../assets/images/twit.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
      </FooterSection>
      <FooterSection>
        <Link to="/">
          <img src={insta} alt="Instagram" />
        </Link>
        <Link to="/" className="links">
          <img src={face} alt="Facebook" />
        </Link>
        <Link to="/" className="links">
          <img src={twit} alt="Twitter" />
        </Link>
      </FooterSection>
      <Descricao>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Descricao>
    </div>
  </Container>
)

export default Footer
