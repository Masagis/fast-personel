import React, { useState } from 'react';

import Aside from './Aside';
import Main from './Main';

function Layout() {
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main handleCollapsedChange={handleCollapsedChange} />
    </div>
  );
}

export default Layout;
