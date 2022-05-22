import React from 'react'
import { FaHome, FaUsers, FaRegCalendarAlt } from 'react-icons/fa'
import slug from './slug'

const menu = [
  {
    name: 'Beranda',
    code: 'beranda',
    icon: <FaHome />,
    to: '/',
    status: true,
  },
  {
    name: 'Personal List',
    code: 'personal_list',
    icon: <FaUsers />,
    to: slug.personalList.to,
    status: true,
  },
  {
    name: 'Daily Attendance',
    code: 'daily_attan',
    icon: <FaRegCalendarAlt />,
    to: slug.dailyAttandance.to,
    status: true,
  },
]
export default menu
