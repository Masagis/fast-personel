import React from 'react'
import slug from 'src/constants/slug'

const Personal = React.lazy(() => import('src/views/personal/PersonalList'))

const personalList = [
  {
    path: slug.personalList.to,
    name: 'Personal',
    component: Personal,
    exact: true,
  },
]

export default personalList
