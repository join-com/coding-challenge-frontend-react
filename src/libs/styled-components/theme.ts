export interface ThemeInterface {
  color: {
    [key: string]: string
  }
}

const colorPrimitives = {
  primaryBlack: '#212121',
  primaryWhite: '#ffffff',
  lightGrey: '#bdbdbd',
}

const color = {
  text: colorPrimitives.primaryBlack,
  background: colorPrimitives.primaryWhite,
  divider: colorPrimitives.lightGrey,
}

export { color }
