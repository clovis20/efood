class Restaurante {
  button: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  notas: number

  constructor(
    id: number,
    button: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    notas: number
  ) {
    this.id = id
    this.button = button
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.notas = notas
  }
}

export default Restaurante
