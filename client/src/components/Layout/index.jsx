import React, { useState } from 'react';

import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import SideNavigation from './SideNavigation';

function Layout({ children }) {
  const [menu, setMenu] = useState('대쉬보드');

  const navWidth = 280;
  const width = `calc(100% - ${navWidth}px)`;

  const createClickMenuHandler = menu => () => {
    setMenu(menu);
  };

  return (
    <Box sx={{ width, ml: `${navWidth}px` }}>
      <SideNavigation width={navWidth} createClickMenuHandler={createClickMenuHandler} />
      <Header menu={menu} />
      {children}
      <Footer width={width} />
    </Box>
  );
}

export default Layout;
