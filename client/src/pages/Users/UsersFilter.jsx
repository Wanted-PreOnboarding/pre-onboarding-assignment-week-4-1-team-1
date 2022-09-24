import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import baseUrl from '../../api';
import { getToken } from '../../utils/token';
import { divisionList } from '../../utils/divisionList';
import { LiMIT_ITEM } from '../../utils/itemLimit';

import TableBodyList from './components/TableBodyList';
import SearchBar from './components/SearchBar';
import AddUser from './components/AddUser';
import FilterBotton from './components/FilterBotton';
import TableHeadList from './components/TableHeadList';

import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

import qs from 'query-string';

const token = getToken();

function UsersFilter() {
  const [userList, setUserList] = useState([]);

  const searchParams = useLocation().search;
  const query = qs.parse(searchParams);
  const checkStaff = query.is_staff;
  const checkActive = query.is_active;

  const [pages, setPages] = useState(0);

  const getFilterUser = uuidFilterArray => {
    getUserList().then(res => {
      const users = res.filter(val => uuidFilterArray.includes(val.uuid));
      const li = divisionList(users, +LiMIT_ITEM);
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
    setCurPage(e.target.textContent - 1);
  };

  useEffect(() => {
    getUserUuid();
  }, [searchParams]);

  return (
    <Box>
      <SearchBar />
      <AddUser getlist={getUserUuid} />
      <FilterBotton checkStaff={checkStaff} checkActive={checkActive} />
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHeadList />
          <TableBody>
            {userList.length ? (
              userList[curPage].map((user, key) => {
                return (
                  <TableBodyList user={user} key={key} curPage={curPage} getlist={getUserUuid} />
                );
              })
            ) : (
              <tr>
                <td>Loading.....</td>
              </tr>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={pages} onChange={onChangePage} variant="outlined" shape="rounded" />
    </Box>
  );
}

export default UsersFilter;
