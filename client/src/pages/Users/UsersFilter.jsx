import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import baseUrl from '../../api';
import { getToken } from '../../utils/token';
import TableBodyList from './components/TableBodyList';
import SearchBar from './components/SearchBar';
import AddUser from './components/AddUser';
import FilterBotton from './components/FilterBotton';
import TableHeadList from './components/TableHeadList';

import qs from 'query-string';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const token = getToken();

function UsersFilter() {
  const [userList, setUserList] = useState([]);

  const searchParams = useLocation().search;
  const query = qs.parse(searchParams);
  const checkStaff = query.is_staff;
  const checkActive = query.is_active;

  const LIMIT = '4';

  const divisionList = (arr, n) => {
    const length = arr.length;
    const cut = Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
    const tmp = [];

    for (let i = 0; i < cut; i++) {
      tmp.push(arr.splice(0, n));
    }
    return tmp;
  };

  const [pages, setPages] = useState(0);

  const getFilterUser = uuidFilterArray => {
    getUserList().then(res => {
      const users = res.filter(val => uuidFilterArray.includes(val.uuid));
      const li = divisionList(users, +LIMIT);
      setPages(li.length);
      setUserList(li);
    });
  };

  const getUserList = async () => {
    const res = await baseUrl.get(`/customers`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res.data;
  };

  const getUserUuid = async () => {
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

  const [curPage, setCurPage] = useState(0);

  const onChangePage = e => {
    setCurPage(e.target.textContent);
  };

  useEffect(() => {
    getUserUuid();
  }, [searchParams]);

  return (
    <Box>
      <SearchBar />
      <AddUser getUsers={getUserUuid} />
      <FilterBotton checkStaff={checkStaff} checkActive={checkActive} />
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHeadList />
          <TableBody>
            {userList.length
              ? userList[curPage].map((user, key) => {
                  return (
                    <TableBodyList user={user} key={key} curPage={curPage} getUsers={getUserUuid} />
                  );
                })
              : 'Loading...'}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={pages} onChange={onChangePage} variant="outlined" shape="rounded" />
    </Box>
  );
}

export default UsersFilter;
