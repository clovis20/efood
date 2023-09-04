import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/Restaurante'

import sushi from '../../assets/images/prato1.png'
import vita from '../../assets/images/prato2.png'
import Header from '../../components/Header'

const restaurante: Restaurante[] = [
  {
    id: 1,
    button: 'Saiba mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    notas: 4.8
  },
  {
    id: 2,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: vita,
    notas: 4.8
  },
  {
    id: 3,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: vita,
    notas: 4.8
  },
  {
    id: 4,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: vita,
    notas: 4.8
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList restaurantes={restaurante} title="Cardápio" />
  </>
)

export default Home
