import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import SideNavigation from './SideNavigation';

function Layout({ children }) {
  const [menu, setMenu] = useState('사용자');

  const navWidth = 280;
  const width = `calc(100% - ${navWidth}px)`;

  const createClickMenuHandler = menu => () => {
    setMenu(menu);
  };

  return (
    <Box sx={{ width, ml: `${navWidth}px` }}>
      <SideNavigation width={navWidth} createClickMenuHandler={createClickMenuHandler} />
      <Header menu={menu} />
      <Outlet />
      {children}
      <Footer width={width} />
    </Box>
  );
}

export default Layout;
