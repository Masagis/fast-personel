/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { Menu, MenuItem, SidebarContent } from 'react-pro-sidebar'
import menu from 'src/constants/menus'

const SidebarMenu = () => {
  const [listMenu, setListMenu] = useState([])

  useEffect(() => {
    setListMenu(menu)
  }, [])

  const activeRoute = (routeName) => {
    if (routeName === '/personal-list') {
      const active = true
      return active
    }
  }

  return (
    <SidebarContent>
      <Menu>
        {listMenu?.map((item, index) => {
          if (item?.status) {
            return (
              <MenuItem
                style={
                  item?.code === 'personal_list'
                    ? { color: '#24c7c6' }
                    : { color: 'none' }
                }
                key={index}
                icon={item.icon}
                active={activeRoute(item.to)}>
                {item.name}
              </MenuItem>
            )
          }
        })}
      </Menu>
    </SidebarContent>
  )
}

export default SidebarMenu
