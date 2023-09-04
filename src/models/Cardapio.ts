class Cardapio {
  button: string
  description: string
  image: string
  title: string
  id: number

  constructor(
    id: number,
    button: string,
    description: string,
    image: string,
    title: string
  ) {
    this.id = id
    this.button = button
    this.description = description
    this.image = image
    this.title = title
  }
}

export default Cardapio
