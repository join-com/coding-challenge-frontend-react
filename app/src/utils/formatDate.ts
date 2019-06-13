export function formatDate(timestamp: number) {
  const date = new Date(timestamp)
  const month = date.toLocaleString('en-us', { month: 'short' })
  return `${month} ${date.getDay()}, ${date.getFullYear()}`
}
