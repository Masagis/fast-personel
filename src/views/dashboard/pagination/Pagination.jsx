import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Pagination.scss'

function Pagination({
  data,
  currentPage,
  dataPerPage,
  onClickLeft,
  onClickRight,
}) {
  return (
    <div className='container-pagination mt-4'>
      <button
        onClick={onClickLeft}
        className='wrapper-pagination'
        disabled={currentPage === 1 ? true : false}>
        <FaChevronLeft className='icon-left' />
        <p style={{ fontWeight: 'bold' }}>Previous Page</p>
      </button>
      <button
        onClick={onClickRight}
        className='wrapper-pagination'
        disabled={
          data && Math.ceil(data.length / dataPerPage) === currentPage
            ? true
            : false
        }>
        <p style={{ fontWeight: 'bold' }}>Next Page</p>
        <FaChevronRight className='icon-right' />
      </button>
    </div>
  )
}

export default Pagination
