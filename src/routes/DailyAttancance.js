import React from 'react'
import slug from 'src/constants/slug'

const DailyAttandance = React.lazy(() => import('src/views/master/Daily'))

const dailyAttandance = [
  {
    path: slug.dailyAttandance.to,
    name: 'Daily',
    component: DailyAttandance,
    exact: true,
  },
]

export default dailyAttandance
