import { useEffect, useState } from 'react';

import baseUrl from '../../../api';
import { getToken } from '../../../utils/token';
import { maskingName, maskingPhoneNumber } from '../../../utils/masking';

import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const token = getToken();

const getAccountCount = async userId => {
  const res = await baseUrl.get(`/accounts/?user_id=${userId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res.data.length;
};

const checkMarketingPush = async uuid => {
  const res = await baseUrl.get(`/userSetting/?uuid=${uuid}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res.data[0].allow_marketing_push;
};

const checkIsActive = async uuid => {
  const res = await baseUrl.get(`/userSetting/?uuid=${uuid}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res.data[0].is_active;
};

function TableBodyList({ user, curPage, getUsers }) {
  const [accountCount, setAccountCount] = useState(0);
  const [marketing, setMarketing] = useState('X');
  const [isActive, setIsActive] = useState('X');
  useEffect(() => {
    getAccountCount(user.id).then(res => setAccountCount(res));
    checkMarketingPush(user.uuid).then(res => {
      res === true ? setMarketing('O') : setMarketing('X');
    });
    checkIsActive(user.uuid).then(res => {
      res === true ? setIsActive('O') : setIsActive('X');
    });
  }, [curPage]);

  const onDeleteUser = async id => {
    if (window.confirm('정말 삭제합니까?')) {
      await baseUrl.delete(`/customers/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      getUsers();
    }
  };

  const onEditUserName = id => {
    console.log('edit', id);
  };

  return (
    <StyledTableRow>
      <StyledTableCell align="center">
        {maskingName(user.name)}
        <IconButton onClick={() => onEditUserName(user.id)} aria-label="edit" size="small">
          <EditIcon fontSize="inherit" />
        </IconButton>
      </StyledTableCell>
      <StyledTableCell align="center">{accountCount}</StyledTableCell>
      <StyledTableCell align="center">{user.email}</StyledTableCell>
      <StyledTableCell align="center">{user.gender_origin}</StyledTableCell>
      <StyledTableCell align="center">{user.birth_date.slice(0, 10)}</StyledTableCell>
      <StyledTableCell align="center">{maskingPhoneNumber(user.phone_number)}</StyledTableCell>
      <StyledTableCell align="center">{user.last_login.slice(0, 10)}</StyledTableCell>
      <StyledTableCell align="center">{marketing}</StyledTableCell>
      <StyledTableCell align="center">{isActive}</StyledTableCell>
      <StyledTableCell align="center">{user.created_at.slice(0, 10)}</StyledTableCell>
      <StyledTableCell align="center">
        <IconButton onClick={() => onDeleteUser(user.id)} aria-label="delete" size="small">
          <DeleteIcon color="error" fontSize="inherit" />
        </IconButton>
      </StyledTableCell>
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
