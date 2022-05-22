import React from 'react'

import slug from 'src/constants/slug'
import personalList from './Personal'
import dailyAttandance from './DailyAttancance'

const Dashboard = React.lazy(() => import('src/views/dashboard/Dashboard'))

const routes = [
  {
    path: slug.dashboard.to,
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
  },
  ...personalList,
  ...dailyAttandance,
]

export default routes
