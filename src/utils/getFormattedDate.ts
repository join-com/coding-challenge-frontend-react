const getFormattedDate = (secondsTimestamp: number) =>
  new Date(secondsTimestamp * 1000)
    .toLocaleString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
    .replace(/,/g, '');

export default getFormattedDate;
