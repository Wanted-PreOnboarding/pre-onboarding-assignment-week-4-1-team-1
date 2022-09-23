import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Toolbar,
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

function SideNavigation({ width, createClickMenuHandler }) {
  const { palette } = useTheme();

  // 로그아웃
  const onLogoutHandler = () => {
    sessionStorage.clear();
    alert('로그아웃이 완료되었습니다.');
    window.location.reload();
  };

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { backgroundColor: palette.primary.dark, width, color: 'white' } }}
    >
      <Toolbar>
        <StyledLink to="/">
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>PREFACE</Typography>
        </StyledLink>
      </Toolbar>
      <Divider />
      <List>
        <StyledLink to="accounts">
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="계좌 목록" />
            <ListItemIcon sx={{ color: 'white' }} />
          </ListItemButton>
        </StyledLink>
        <StyledLink to="users?_page=1&_limit=4">
          <ListItemButton onClick={createClickMenuHandler('사용자')}>
            <ListItemIcon sx={{ color: 'white' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="사용자" />
          </ListItemButton>
        </StyledLink>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'white' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="로그아웃" onClick={onLogoutHandler} />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default SideNavigation;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
