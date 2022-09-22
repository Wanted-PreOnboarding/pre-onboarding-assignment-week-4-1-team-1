import { useEffect, useState } from 'react';

import baseUrl from '../../../api';
import { getToken } from '../../../utils/token';
import { maskingName, maskingPhoneNumber } from '../../../utils/masking';

import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const token = getToken();

const getAccountCount = async userId => {
  const res = await baseUrl.get(`/accounts/?user_id=${userId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res.data.length;
};

function TableBodyList({ user, curPage }) {
  const [accountCount, setAccountCount] = useState(0);
  useEffect(() => {
    getAccountCount(user.id).then(res => setAccountCount(res));
  }, [curPage]);

  return (
    <StyledTableRow>
      <StyledTableCell align="center">{maskingName(user.name)}</StyledTableCell>
      <StyledTableCell align="center">{accountCount}</StyledTableCell>
      <StyledTableCell align="center">{user.email}</StyledTableCell>
      <StyledTableCell align="center">{user.gender_origin}</StyledTableCell>
      <StyledTableCell align="center">{user.birth_date.slice(0, 10)}</StyledTableCell>
      <StyledTableCell align="center">{maskingPhoneNumber(user.phone_number)}</StyledTableCell>
      <StyledTableCell align="center">{user.last_login.slice(0, 10)}</StyledTableCell>
      <StyledTableCell align="center">아직</StyledTableCell>
      <StyledTableCell align="center">아직</StyledTableCell>
      <StyledTableCell align="center">{user.created_at.slice(0, 10)}</StyledTableCell>
    </StyledTableRow>
  );
}

export default TableBodyList;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
