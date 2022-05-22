import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import routes from 'src/routes/routes'
import Header from './Header'

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse' />
  </div>
)

const Main = ({ handleCollapsedChange }) => (
  <div className='w-100 d-flex flex-column'>
    <Header handleCollapsedChange={handleCollapsedChange} />
    <div className='container-fluid px-3 h-100' style={{ overflow: 'auto' }}>
      <Suspense fallback={loading}>
        <Routes>
          {routes.map(
            (route, idx) =>
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.component name={route.name} />}
                />
              )
          )}
        </Routes>
      </Suspense>
    </div>
  </div>
)

export default Main
