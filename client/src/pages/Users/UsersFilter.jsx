import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { divisionList } from '../../utils/divisionList';
import { LiMIT_ITEM } from '../../utils/itemLimit';
import { getCustomersAll } from '../../api/customers';
import { getUserSettingUuid } from '../../api/userSetting';

import TableBodyList from './components/TableBodyList';
import TableHeadList from './components/TableHeadList';
import Header from './components/Header';
import Paginations from './components/Paginations';

import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import qs from 'query-string';

function UsersFilter() {
  const [userList, setUserList] = useState([]);

  const searchParams = useLocation().search;
  const query = qs.parse(searchParams);

  let checkStaff;
  let checkActive;

  query.is_staff === 'true' ? (checkStaff = true) : (checkStaff = undefined);
  query.is_active === 'true' ? (checkActive = true) : (checkActive = undefined);

  const [pages, setPages] = useState(0);

  const getFilterUser = uuidFilterArray => {
    getCustomersAll().then(res => {
      const users = res.data.filter(val => uuidFilterArray.includes(val.uuid));
      const li = divisionList(users, +LiMIT_ITEM);
      setPages(li.length);
      setUserList(li);
    });
  };

  const getUserUuid = async () => {
    getUserSettingUuid(searchParams).then(res => {
      const uuidFilterArray = res.data.map(val => {
        return val.uuid;
      });
      getFilterUser(uuidFilterArray);
    });
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
      <Header getlist={getUserUuid} checkStaff={checkStaff} checkActive={checkActive} />
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
      <Paginations pages={pages} onChangePage={onChangePage} />
    </Box>
  );
}

export default UsersFilter;
