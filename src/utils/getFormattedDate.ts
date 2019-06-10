const getFormattedDate = (
  secondsTimestamp?: number,
  { withTime = true } = {}
) =>
  secondsTimestamp
    ? new Date(secondsTimestamp * 1000)
        .toLocaleString('en-US', {
          hour: withTime ? 'numeric' : undefined,
          minute: withTime ? 'numeric' : undefined,
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })
        .replace(/,/, '')
    : null;

export default getFormattedDate;
