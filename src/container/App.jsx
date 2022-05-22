import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse' />
  </div>
)

const TheLayout = React.lazy(() => import('./Layout'))

const App = () => (
  <BrowserRouter>
    <React.Suspense fallback={loading}>
      <Routes>
        <Route path='*' name='Home' element={<TheLayout />} />
      </Routes>
    </React.Suspense>
  </BrowserRouter>
)
export default App
