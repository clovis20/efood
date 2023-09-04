import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preto: '#111',
  laranja: '#e66767',
  fundo1: '#FFF8F2',
  fundo2: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.laranja};
  }

  .container {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`
