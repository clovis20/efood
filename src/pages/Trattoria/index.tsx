import { useEffect, useState } from 'react'
import ProductsList from '../../components/Trattoria/ProductsList'
import Header from '../../components/Trattoria/Header'
import Vita from '../../components/Trattoria/Vita'

export interface Prato {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

interface Restaurante {
  id: number
  titulo: string
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Trattoria = () => {
  const [cardapio, setCardapio] = useState<Prato[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: Restaurante[]) => {
        // Filtrar o restaurante com ID 5
        const restaurante = res.find((rest: Restaurante) => rest.id === 5)

        if (restaurante) {
          // Encontrar o prato com ID 17 dentro do restaurante
          const prato = restaurante.cardapio.find((item) => item.id === 17)

          if (prato) {
            const pratosRepetidos = Array(6).fill(prato)
            setCardapio(pratosRepetidos)
          }
        }
      })
  }, [])

  return (
    <>
      <Header />
      <Vita />
      <ProductsList pratos={cardapio} />
    </>
  )
}

export default Trattoria
