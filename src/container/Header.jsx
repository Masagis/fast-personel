import React from 'react'
import { FaBars, FaUser } from 'react-icons/fa'

const Header = ({ handleCollapsedChange }) => {
  return (
    <div
      className='d-flex justify-content-between px-3 align-items-center border-bottom'
      style={{ height: 79 }}>
      <button
        className='btn text-primary px-0'
        onClick={handleCollapsedChange}
        style={{
          height: 30,
          fontSize: '1.8rem',
        }}>
        <FaBars style={{ color: '#24c7c6' }} />
      </button>
      <div className=''>
        <span className='mx-2'>Hallo, Gadjian User</span>

        <button
          className='btn rounded-circle'
          style={{ background: '#24c7c6', color: '#ffffff' }}>
          <FaUser />
        </button>
      </div>
    </div>
  )
}

export default React.memo(Header)
