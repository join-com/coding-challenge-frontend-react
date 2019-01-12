import React from 'react'

const Element = ({ text, disable, changeTo, changeCurrentPage }) => {
  if (disable) {
    return null
  }
  if (!changeTo) {
    changeTo = parseInt(text)
  }
  return (
    <li className="page-item" onClick={ () => changeCurrentPage(changeTo)}>
      <button className="page-link" aria-disabled={disable + ''}>
        {text}
      </button>
    </li>
  )
}
const Pagination = props => {
  const { currentPage, totalRecords, changeCurrentPage } = props
  const noOfRecords = 10
  const numrows = Math.ceil(totalRecords / noOfRecords)
  let numbers = []
  for (var i = 0; i < numrows; ) {
    numbers.push(
      <Element
        text={' ' + ++i + ' '}
        key={i}
        changeCurrentPage={changeCurrentPage}
      />
    )
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <Element
          text={'<< First'}
          changeTo={1}
          disable={currentPage === 1}
          changeCurrentPage={changeCurrentPage}
        />
        <Element
          text={'< Prev'}
          changeTo={currentPage - 1}
          disable={currentPage === 1}
          changeCurrentPage={changeCurrentPage}
        />

        {numbers}

        <Element
          text={'Next >'}
          changeTo={currentPage + 1}
          disable={currentPage * noOfRecords > totalRecords}
          changeCurrentPage={changeCurrentPage}
        />
        <Element
          text={'Last >>'}
          changeTo={numbers.length}
          disable={currentPage * noOfRecords > totalRecords}
          changeCurrentPage={changeCurrentPage}
        />
      </ul>
    </nav>
  )
}

export default Pagination
