import React from 'react'
import { ProSidebar, SidebarHeader } from 'react-pro-sidebar'

import styles from './constant/styles'
import SidebarMenu from './SidebarMenu'
import logo from 'src/assets/images/gadjian-logo.png'

const Aside = ({ toggled, handleToggleSidebar, collapsed }) => (
  <ProSidebar
    breakPoint='md'
    onToggle={handleToggleSidebar}
    toggled={toggled}
    collapsed={collapsed}>
    <SidebarHeader>
      <div style={styles.title}>
        <img
          src={collapsed ? logo : logo}
          alt=''
          style={{
            height: 31,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          className='img-fluid '
        />
      </div>
    </SidebarHeader>

    <SidebarMenu />
  </ProSidebar>
)

export default Aside
