export const SET_KEYWORD = "SET_KEYWORD";
export const SET_FROM = "SET_FROM";
export const SET_TO = "SET_TO";

export function setKeyword(keyword) {
  return {
    type:SET_KEYWORD,
    keyword
  }
}

export function setFrom(from) {
  return {
    type:SET_FROM,
    from
  }
}

export function setTo(to) {
  return {
    type:SET_TO,
    to
  }
}
