import React from 'react';
import { Grid, Typography } from '@mui/material';

function Footer({ width }) {
  return (
    <Grid container justifyContent="center" sx={{ width }}>
      <Typography>Copyright © December and Company Inc.</Typography>
    </Grid>
  );
}

export default Footer;
