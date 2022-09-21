import React from 'react';
import { Grid, Typography, Toolbar, IconButton, Avatar } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Header() {
  return (
    <Toolbar>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={10} container alignItems="center">
          <IconButton>
            <MenuOpenIcon />
          </IconButton>
          <Typography>(선택된 메뉴 페이지)</Typography>
        </Grid>
        <Grid item xs={2} container justifyContent="flex-end">
          <Avatar alt="" src="" sx={{}}>
            ?
          </Avatar>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Header;
