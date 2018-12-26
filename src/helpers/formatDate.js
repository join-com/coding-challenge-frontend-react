import { LOCALE } from "../constants/global";

/**
 * Create local string date from timestamp
 * @param {Number} timestamp  in seconds
 */
const formatTimeStampToDate = timestamp => {
  const second = 1000;
  const date = new Date(timestamp * second);
  const formatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  const formatedDate = date.toLocaleString(LOCALE, formatOptions);
  return formatedDate;
};

export default formatTimeStampToDate;
