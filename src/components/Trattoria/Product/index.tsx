import { useState } from 'react'
import fechar from '../../../assets/images/fechar.png'
import {
  Card,
  Descricao,
  Titulo,
  Botao,
  Modal,
  ModalContent,
  AdicionarBotao
} from './styles'
//import { updateSpreadAssignment } from 'typescript'
import { useDispatch } from 'react-redux'

import { add, open } from '../../../store/reducers/cart'

interface Prato {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

interface ModalState {
  isVisible: boolean
  type: 'image'
  url: string
}

interface Props {
  prato: Prato
}

const Product = ({ prato }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [modalEstaAberto, setModalEstaAberto] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  return (
    <>
      <Card>
        <div>
          <img src={prato.foto} alt={prato.nome} />
        </div>
        <Titulo>{prato.nome}</Titulo>
        <Descricao>{prato.descricao}</Descricao>
        <Botao
          onClick={() => {
            setModalEstaAberto({
              isVisible: true,
              type: 'image',
              url: ''
            })
          }}
        >
          Mais detalhes
        </Botao>
      </Card>
      <Modal className={modalEstaAberto.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <img
              src={fechar}
              className="close-button"
              alt="Fechar"
              onClick={() => {
                setModalEstaAberto({
                  isVisible: false,
                  type: 'image',
                  url: ''
                })
              }}
            />
          </header>
          <img src={prato.foto} alt={prato.nome} />
          <div>
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <p> Serve: {prato.porcao}</p>
            <AdicionarBotao onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(prato.preco)}
            </AdicionarBotao>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModalEstaAberto({
              isVisible: false,
              type: 'image',
              url: ''
            })
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Product
