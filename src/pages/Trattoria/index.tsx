import ProductsList from '../../components/Trattoria/ProductsList'
import Cardapio from '../../models/Cardapio'

import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Trattoria/Header'
import Vita from '../../components/Trattoria/Vita'

const cardapio: Cardapio[] = [
  {
    id: 1,
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 2,
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 3,
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 4,
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 5,
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  },
  {
    id: 6,
    button: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    image: pizza
  }
]

const Trattoria = () => (
  <>
    <Header />
    <Vita />
    <ProductsList pratos={cardapio} title="Pratos" />
  </>
)

export default Trattoria
