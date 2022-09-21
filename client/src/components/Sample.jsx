import React from 'react';
import { Box } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

import { useLoginUserQuery, useGetAccountsQuery } from '../services';

const user = {
  email: 'johndoe@gmail.com',
  password: '12345678',
};

function Sample() {
  const { data } = useLoginUserQuery(user);
  console.log(data);
  const { data: accounts } = useGetAccountsQuery();
  console.log(accounts);

  return (
    <Box sx={{ backgroundColor: blueGrey[200] }}>
      <h1>Sample</h1>
    </Box>
  );
}

export default Sample;
