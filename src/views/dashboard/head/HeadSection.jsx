import React from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa'

import './HeadSection.scss'

function HeadSection() {
  return (
    <div className='wrapper-main-content'>
      <div className='header-main-content'>
        <div className='title-header'>
          <h4>PERSONAL LIST</h4>
          <p>List of all personnels</p>
        </div>
        <div className='right-side-main-content'>
          <div className='input-right-side'>
            <FaSearch className='icon-right-side' />
            <input type='text' placeholder='Find Personnels' />
          </div>

          <button className='button-right-side' style={{ border: 'none' }}>
            <p>ADD PERSONNELS</p>
            <FaPlus className='icon-right-side' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeadSection
