import { Card, Descricao, Titulo, Botao } from './styles'

type Props = {
  title: string
  button: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <div>
      <img src={image} alt={title} />
    </div>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default Product
