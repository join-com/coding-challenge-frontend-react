import moment from 'moment';

export const DATE_FORMAT = 'ddd MMM DD YYYY';

export function timestampToDate(timestamp, format = DATE_FORMAT) {
  return moment.utc(timestamp * 1000).local().format(format);
}

const DatetimeHelpers = {
  timestampToDate,
};

export default DatetimeHelpers;
