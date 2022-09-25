import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import qs from 'query-string';

import { getCustomersByPage } from '../../api/customers';
import { LiMIT_ITEM } from '../../utils/itemLimit';

import TableBodyList from './components/TableBodyList';
import TableHeadList from './components/TableHeadList';
import Header from './components/Header';

import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

function UsersList() {
  const [userList, setUserList] = useState([]);

  const searchParams = useLocation().search;
  const query = qs.parse(searchParams);
  const curPage = query._page;

  const getUsers = async () => {
    getCustomersByPage(curPage).then(userInfo => {
      setUserList(userInfo.data);
      setPages(Math.ceil(userInfo.meta.totalLength / LiMIT_ITEM));
    });
  };

  const navigate = useNavigate();

  const onChangePage = e => {
    navigate(`/users?_page=${e.target.textContent}&_limit=${LiMIT_ITEM}`);
  };

  const [pages, setPages] = useState(0);

  useEffect(() => {
    getUsers();
  }, [searchParams]);

  return (
    <Box>
      <Header getlist={getUsers} />
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHeadList />
          <TableBody>
            {userList.length ? (
              userList.map((user, key) => {
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

export default UsersList;
