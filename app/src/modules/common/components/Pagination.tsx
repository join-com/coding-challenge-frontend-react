import * as React from 'react'
import * as lo from 'lodash'

export type PaginationProps = {
  activePage: number
  pages: number
  onPageChange: (page: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({ pages, activePage, onPageChange }) => {
  function pageChangeHandler(page: number) {
    return function(event: React.MouseEvent) {
      event.preventDefault()
      onPageChange(page)
    }
  }
  return (
    <div>
      <style jsx={true}>
        {/* language=SCSS */ `
          div {
            padding: 15px;
            text-align: center;
            span,
            a {
              padding: 0 10px;
            }
          }
        `}
      </style>
      {lo.range(1, pages).map((page) =>
        page === activePage ? (
          <span>
            <b>{page}</b>
          </span>
        ) : (
          <a href="#" onClick={pageChangeHandler(page)}>
            {page}
          </a>
        ),
      )}
    </div>
  )
}
