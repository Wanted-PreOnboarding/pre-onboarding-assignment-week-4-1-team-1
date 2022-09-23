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

const token = getToken();

function UsersList() {
  const [userList, setUserList] = useState([]);

  const searchParams = useLocation().search;
  const query = qs.parse(searchParams);
  const curPage = query._page;

  let totalUsers = 0;
  const LIMIT = '4';

  const getUsers = async () => {
    const res = await baseUrl.get(`/customers/${searchParams}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    setUserList(res.data);
    totalUsers = res.headers['x-total-count'];
  };

  const navigate = useNavigate();

  const onChangePage = e => {
    navigate(`/users/?_page=${e.target.textContent}&_limit=${LIMIT}`);
  };

  const [pages, setPages] = useState(0);

  useEffect(() => {
    getUsers().then(() => {
      setPages(Math.ceil(totalUsers / +LIMIT));
    });
  }, [searchParams]);

  return (
    <Box>
      <SearchBar />
      <AddUser getUsers={getUsers} />
      <FilterBotton />
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHeadList />
          <TableBody>
            {userList.length
              ? userList.map((user, key) => {
                  return (
                    <TableBodyList user={user} key={key} curPage={curPage} getUsers={getUsers} />
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

export default UsersList;
