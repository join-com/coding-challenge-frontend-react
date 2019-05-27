export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export function setCurrentPage(currentPage) {
  return {
    type:SET_CURRENT_PAGE,
    currentPage
  }
}