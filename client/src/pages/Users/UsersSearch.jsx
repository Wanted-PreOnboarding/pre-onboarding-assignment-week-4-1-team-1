import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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

const token = getToken();

function UsersSearch() {
  const [userList, setUserList] = useState([]);

  const searchParams = useLocation().search;

  const [pages, setPages] = useState(0);

  const getUsers = async () => {
    const res = await baseUrl.get(`/customers/${searchParams}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    const users = res.data;
    const li = divisionList(users, +LiMIT_ITEM);
    setPages(li.length);
    setUserList(li);
  };

  const [curPage, setCurPage] = useState(0);

  const onChangePage = e => {
    setCurPage(e.target.textContent - 1);
  };

  useEffect(() => {
    getUsers();
  }, [searchParams]);

  return (
    <Box>
      <SearchBar />
      <AddUser getlist={getUsers} />
      <FilterBotton />
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHeadList />
          <TableBody>
            {userList.length ? (
              userList[curPage].map((user, key) => {
                return <TableBodyList user={user} key={key} curPage={curPage} getlist={getUsers} />;
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

export default UsersSearch;
