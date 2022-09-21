import React from 'react';

import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import SideNavigation from './SideNavigation';

function Layout({ children }) {
  const navWidth = 280;
  const width = `calc(100% - ${navWidth}px)`;

  return (
    <Box sx={{ width: '100%', ml: `${navWidth}px` }}>
      <SideNavigation width={navWidth} />
      <Header width={width} />
      {children}
      <Footer width={width} />
    </Box>
  );
}

export default Layout;
