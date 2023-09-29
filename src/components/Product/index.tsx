import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos, Notas, TituloDiv } from './styles'
import Button from '../Button'

import estrela from '../../assets/images/star_favorite.png'

type Props = {
  title: string
  button: string
  description: string
  infos: string[]
  image: string
  notas: number
  isDestaque: boolean
  id: number
}

const Product = ({
  title,
  button,
  description,
  infos,
  image,
  notas,
  isDestaque,
  id
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {isDestaque && <Tag>Destaque da semana</Tag>}
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TituloDiv>
      <Titulo>{title}</Titulo>
      <div className="display">
        <Notas>{notas}</Notas>
        <img src={estrela} alt="Estrela" />
      </div>
    </TituloDiv>
    <Descricao>{description}</Descricao>
    <Button
      type="link"
      to={`/restaurantes/${id}`}
      title="Conheça nosso restaurante"
    >
      {button}
    </Button>
  </Card>
)

export default Product
