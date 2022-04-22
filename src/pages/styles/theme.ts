interface ITheme {
  color: {
    background: string
    letters: string
  }
  fontFamily: {
    comic: string
    title: string
    paragraph: string
  }
}

const theme: ITheme = {
  color: {
    background: 'black',
    letters: 'white',
  },
  fontFamily: {
    comic: 'Bangers',
    title: 'Amatic SC',
    paragraph: 'Bw Gradual',
  },
}

export default theme
