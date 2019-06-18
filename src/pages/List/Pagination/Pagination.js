import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  margin: 15px;
  padding: 5px;
  font-weight: ${props => (props.isSelected ? 700 : 400)};
`

export default function Pagination({
  currentPageIndex,
  countResults,
  resultsPerPage,
  handleCurrentPageChange,
}) {
  const lastIndex = Math.ceil(countResults / resultsPerPage)
  const pages = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lastIndex; i++) {
    pages.push(
      <Button
        key={i}
        onClick={() => handleCurrentPageChange(i + 1)}
        isSelected={currentPageIndex === i + 1}
      >
        {i + 1}
      </Button>
    )
  }
  return (
    <Wrapper>
      <Button
        onClick={() => handleCurrentPageChange(0)}
        disabled={currentPageIndex === 1}
      >
        &lt;&lt; First
      </Button>
      <Button
        onClick={() =>
          handleCurrentPageChange(Math.min(1, currentPageIndex - 1))
        }
        disabled={currentPageIndex === 1}
      >
        &lt; Prev
      </Button>
      {pages}
      <Button
        onClick={() => handleCurrentPageChange(currentPageIndex + 1)}
        disabled={currentPageIndex === lastIndex}
      >
        &gt; Next
      </Button>
      <Button
        onClick={() => handleCurrentPageChange(lastIndex)}
        disabled={currentPageIndex === lastIndex}
      >
        &gt;&gt; Last
      </Button>
    </Wrapper>
  )
}
