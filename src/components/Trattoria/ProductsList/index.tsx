import { Prato } from '../../../pages/Trattoria'
import Product from '../Product'

import { Container, List } from './styles'

interface Props {
  pratos: Prato[]
}

const ProductsList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Product key={prato.id} prato={prato} />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
