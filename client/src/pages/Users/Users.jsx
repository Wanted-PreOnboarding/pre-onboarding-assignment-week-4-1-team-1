import { useState } from 'react';
import { useEffect } from 'react';

import baseUrl from '../../api';
import { getToken } from '../../utils/token';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Users() {
  const token = getToken();

  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    const res = await baseUrl.get('/users/?_page=1&_limit=4', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    setUserList(res.data);
  };

  //   const getAccountCount = async userId => {
  //     const res = await baseUrl.get(`/accounts/?user_id=${userId}`, {
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //       },
  //     });

  //     return res.data.length
  //   };

  const maskingName = strName => {
    if (strName.length > 2) {
      let originName = strName.split('');
      originName.forEach(function (name, i) {
        if (i === 0 || i === originName.length - 1) return;
        originName[i] = '*';
      });
      let joinName = originName.join();
      return joinName.replace(/,/g, '');
    } else {
      let pattern = /.$/; // 정규식
      return strName.replace(pattern, '*');
    }
  };

  const maskingPhoneNumber = phoneNumber => {
    return phoneNumber.replace(/\-.*\-/, '-****-');
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.length
              ? userList.map((user, key) => {
                  //getAccountCount(user.id);

                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell align="center">{maskingName(user.name)}</StyledTableCell>
                      <StyledTableCell align="center">아직</StyledTableCell>
                      <StyledTableCell align="center">{user.email}</StyledTableCell>
                      <StyledTableCell align="center">{user.gender_origin}</StyledTableCell>
                      <StyledTableCell align="center">
                        {user.birth_date.slice(0, 10)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {maskingPhoneNumber(user.phone_number)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {user.last_login.slice(0, 10)}
                      </StyledTableCell>
                      <StyledTableCell align="center">아직</StyledTableCell>
                      <StyledTableCell align="center">아직</StyledTableCell>
                      <StyledTableCell align="center">
                        {user.created_at.slice(0, 10)}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })
              : '데이터없음'}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Users;

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
