import React from 'react'
import { NavLink } from 'react-router-dom'

type PropsType = {
  postsPerPage: number
  totalPosts: number
  paginate: (n: number) => void
}

const Pagination: React.FC<PropsType> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <NavLink to="">
              <a onClick={() => paginate(number)} href='!#' className='page-link'>
                {number}
              </a>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;
