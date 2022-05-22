/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import HeadSection from './head/HeadSection'
import Pagination from './pagination/Pagination'
import { getPersonal } from 'src/store/actions/user.action'

function Dashboard() {
  const dispatch = useDispatch()

  const [dataPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState([])

  const Personnel = JSON.parse(localStorage.getItem('userAll'))

  // config for pagination
  const indexOfLast = currentPage * dataPerPage
  const indexOfFirst = indexOfLast - dataPerPage

  useEffect(() => {
    // function get data Redux
    if (Personnel === null) {
      dispatch(getPersonal())
    } else {
      setCurrentData(Personnel.slice(indexOfFirst, indexOfLast))
    }
  }, [currentPage])

  return (
    <div className='row mt-5 p-4'>
      <div className='col d-flex justify-content-center'></div>
      <div className='card shadow' style={{ border: 'none' }}>
        <HeadSection />
      </div>
      <div className='row mt-5'>
        {currentData &&
          currentData.map((item, idx) => (
            <div className='col-md-3 mb-3' key={idx}>
              <div
                className='card shadow p-2 rounded'
                style={{ border: 'none' }}>
                <h5>Personnel ID: {item?.location?.postcode}</h5>
                <hr />
                <img
                  src={item?.picture?.large || ''}
                  alt=''
                  className='img-fluid rounded-circle'
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
                <div className=''>
                  <div style={{ fontWeight: 'bold' }}>Name</div>
                  <div>{item?.name?.first + ' ' + item?.name?.last}</div>
                  <div style={{ fontWeight: 'bold' }}>Telephone</div>
                  <div>{item?.phone}</div>
                  <div style={{ fontWeight: 'bold' }}>Birthday</div>
                  <div>{item?.dob?.date}</div>
                  <div style={{ fontWeight: 'bold' }}>Email</div>
                  <div>{item?.email}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {Personnel ? (
        <Pagination
          data={Personnel}
          currentPage={currentPage}
          dataPerPage={dataPerPage}
          onClickLeft={() => setCurrentPage(currentPage - 1)}
          onClickRight={() => setCurrentPage(currentPage + 1)}
        />
      ) : null}
    </div>
  )
}

export default Dashboard
