export const getTextService = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello ⭐️")
    }, 3000)
  })
}