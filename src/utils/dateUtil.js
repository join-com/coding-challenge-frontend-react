export const stampToDate = (timestamp = 0) => {
  const date = new Date(timestamp)
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const dateToStamp = (date = '') => {
  return (new Date(date).getTime()/1000)
}
