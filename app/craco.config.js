module.exports = () => {
  return {
    babel: {
      plugins: [
        [
          'styled-jsx/babel',
          {
            plugins: ['styled-jsx-plugin-sass'],
          },
        ],
      ],
    },
  }
}
