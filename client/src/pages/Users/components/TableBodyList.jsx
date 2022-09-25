import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { maskingName, maskingPhoneNumber } from '../../../utils/masking';
import { getUserSettingInfo } from '../../../api/userSetting';
import { getAnAccountById } from '../../../api/account';
import { deletCustomersById } from '../../../api/customers';
import EditUserName from './EditUserName';

import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TableBodyList({ user, curPage, getlist }) {
  const [accountCount, setAccountCount] = useState(0);
  const [marketing, setMarketing] = useState('X');
  const [isActive, setIsActive] = useState('X');

  const getAccountCount = async userId => {
    await getAnAccountById(userId).then(res => {
      setAccountCount(res.data.length);
    });
  };

  const checkMarketingPush = async uuid => {
    await getUserSettingInfo(uuid).then(res => {
      const isMarketingPush = res.data[0].allow_marketing_push;
      isMarketingPush === true ? setMarketing('O') : setMarketing('X');
    });
  };

  const checkIsActive = async uuid => {
    await getUserSettingInfo(uuid).then(res => {
      const isCheckActive = res.data[0].is_active;
      isCheckActive === true ? setIsActive('O') : setIsActive('X');
    });
  };

  useEffect(() => {
    getAccountCount(user.id);
    checkMarketingPush(user.uuid);
    checkIsActive(user.uuid);
  }, [curPage]);

  const onDeleteUser = async id => {
    if (window.confirm('정말 삭제합니까?')) {
      await deletCustomersById(id);
      getlist();
    }
  };

  const [isEdit, setIsEdit] = useState(false);

  const onEditModeToggle = () => {
    setIsEdit(prev => !prev);
  };

  return (
    <StyledTableRow>
      <StyledTableCell align="center">
        <Link to={`/users/${user.id}`}>{maskingName(user.name)}</Link>
        {isEdit ? (
          <EditUserName user={user} onEditModeToggle={onEditModeToggle} getlist={getlist} />
        ) : (
          <IconButton onClick={onEditModeToggle} aria-label="edit" size="small">
            <EditIcon fontSize="inherit" />
          </IconButton>
        )}
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
