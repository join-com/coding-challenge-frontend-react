import React from 'react'

const Element = ({text}) => {
    return <li className="page-item">
        <a className="page-link" href="/">
            {text}
        </a>
    </li>;
}
const Pagination = props => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <Element text={'<< First'}/>
        <Element text={'< Prev'}/>

        <Element text={' 1 '}/>
        <Element text={' 2 '}/>
        <Element text={' 3 '}/>
        
        <Element text={'Next >'}/>
        <Element text={'Last >>'}/>
      </ul>
    </nav>
  )
}

export default Pagination


