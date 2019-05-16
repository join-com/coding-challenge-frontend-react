export interface ThemeInterface {
  color: {
    [key: string]: string
  }
}

const colorPrimitives = {
  primaryBlack: '#212121',
  primaryWhite: '#ffffff',
  lightGrey: '#bdbdbd',
  primaryRed: '#d32f2f',
}

const color = {
  text: colorPrimitives.primaryBlack,
  background: colorPrimitives.primaryWhite,
  divider: colorPrimitives.lightGrey,
  error: colorPrimitives.primaryRed,
}

export { color }
