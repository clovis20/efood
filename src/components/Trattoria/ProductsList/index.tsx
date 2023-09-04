import Cardapio from '../../../models/Cardapio'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  pratos: Cardapio[]
}

const ProductsList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((cardapio) => (
          <Product
            key={cardapio.id}
            button={cardapio.button}
            description={cardapio.description}
            image={cardapio.image}
            title={cardapio.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
