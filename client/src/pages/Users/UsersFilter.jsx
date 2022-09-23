import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import baseUrl from '../../api';
import { getToken } from '../../utils/token';
import TableBodyList from './components/TableBodyList';
import SearchBar from './components/SearchBar';
import AddUser from './components/AddUser';
import FilterBotton from './components/FilterBotton';

import qs from 'query-string';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const token = getToken();

function UsersFilter() {
  const [userList, setUserList] = useState([]);

  const searchParams = useLocation().search;
  const query = qs.parse(searchParams);
  const curPage = query._page;
  const checkStaff = query.is_staff;
  const checkActive = query.is_active;

  let totalUsers = 0;
  const LIMIT = '4';

  const getFilterUser = uuidFilterArray => {
    getUsers().then(res => {
      const users = res.filter(val => uuidFilterArray.includes(val.uuid));
      setUserList(users);
    });
  };

  const getUsers = async () => {
    const res = await baseUrl.get(`/customers`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res.data;
  };

  const getUuid = async () => {
    const res = await baseUrl.get(`/userSetting/${searchParams}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const uuidFilterArray = res.data.map(val => {
      return val.uuid;
    });

    getFilterUser(uuidFilterArray);
  };

  useEffect(() => {
    getUuid();
  }, [searchParams]);

  return (
    <Box>
      <SearchBar />
      <AddUser getUsers={getUuid} />
      <FilterBotton checkStaff={checkStaff} checkActive={checkActive} />
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">고객명</StyledTableCell>
              <StyledTableCell align="center">보유계좌수</StyledTableCell>
              <StyledTableCell align="center">이메일</StyledTableCell>
              <StyledTableCell align="center">성별코드</StyledTableCell>
              <StyledTableCell align="center">생년월일</StyledTableCell>
              <StyledTableCell align="center">휴대폰 번호</StyledTableCell>
              <StyledTableCell align="center">최근 로그인</StyledTableCell>
              <StyledTableCell align="center">수신동의 여부</StyledTableCell>
              <StyledTableCell align="center">활성화 여부</StyledTableCell>
              <StyledTableCell align="center">가입일</StyledTableCell>
              <StyledTableCell align="center">삭제</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.length
              ? userList.map((user, key) => {
                  return (
                    <TableBodyList user={user} key={key} curPage={curPage} getUsers={getUuid} />
                  );
                })
              : '데이터없음'}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UsersFilter;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));
