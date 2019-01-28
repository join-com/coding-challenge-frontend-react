import moment from 'moment';

export const format = (timestamp, format = 'DD/MM/YYYY HH:mm') => moment(timestamp * 1000).format(format);
export const fromNow = timestamp => moment(timestamp * 1000).fromNow();