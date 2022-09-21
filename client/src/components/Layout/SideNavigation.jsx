import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Drawer,
  Toolbar,
  Divider,
  Typography,
  List,
  Collapse,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';

function SideNavigation() {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { backgroundColor: palette.primary.dark, width: 280, color: 'white' } }}
    >
      <Toolbar>
        <Typography>(LOGO)</Typography>
        <Typography>PREFACE</Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'white' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="대쉬보드" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={handleClickOpen}>
          <ListItemIcon sx={{ color: 'white' }}>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="계좌 목록" />
          <ListItemIcon sx={{ color: 'white' }}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
        </ListItemButton>
        <Collapse in={open}>
          <List>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon sx={{ color: 'white' }}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary="투자 계좌" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'white' }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="사용자" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon sx={{ color: 'white' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="로그아웃" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default SideNavigation;
