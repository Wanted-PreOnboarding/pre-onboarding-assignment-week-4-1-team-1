import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';

import AccountListTable from './components/AccountListTable';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Selector from './components/Selector';

import { Box } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

import { getAccountsByPage } from '../../api/account';
import { getCustomersAll } from '../../api/customers';

import { BROKERS as brokers } from '../../constant/broker';
import {
  ACCOUNT_STATE as accountsState,
  IS_ACTIVE_ACCOUNT as isActiveAccount,
} from '../../constant/accounts';

function AccountList() {
  const [customers, setCustomers] = useState('');
  const [accountList, setAccountList] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  const [search, setSearch] = useState('');
  const [localBroker, setLocalBroker] = useState('');
  const [localIsActive, setLocalIsActive] = useState('');
  const [localStatus, setLocalStatus] = useState('');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = searchParams.get('page') || 1;
  const isActive = searchParams.get('isActive') || '';
  const brokerId = searchParams.get('brokerId') || '';
  const status = searchParams.get('status') || '';
  const q = searchParams.get('q') || '';

  useEffect(() => {
    getAccountsByPage(page, search, { brokerId, isActive, status }).then(accounts => {
      setAccountList(accounts.data);
      setTotalPages(Math.ceil(accounts.meta.totalLength / 10));
    });
    getCustomersAll().then(customers => {
      setCustomers(customers.data);
    });
  }, [page, search, brokerId, isActive, status]);

  const onChangePage = e => {
    navigate(
      `/accounts?page=${e.target.textContent}&q=${q}&isActive=${isActive}&brokerId=${brokerId}&status=${status}`
    );
    getAccountsByPage(e.target.textContent, search, { brokerId, isActive, status }).then(
      accounts => {
        setAccountList(accounts.data);
        setTotalPages(Math.ceil(accounts.meta.totalLength / 10));
      }
    );
  };

  const onSearch = () => {
    navigate(
      `/accounts?page=${1}&q=${search}&isActive=${localIsActive}&brokerId=${localBroker}&status=${localStatus}`
    );
    getAccountsByPage(1, search, {
      brokerId: localBroker,
      isActive: localIsActive,
      status: localStatus,
    }).then(accounts => {
      setAccountList(accounts.data);
      setTotalPages(Math.ceil(accounts.meta.totalLength / 10));
    });
  };

  const resetForm = () => {
    setSearch('');
    setLocalBroker('');
    setLocalIsActive('');
    setLocalStatus('');
  };

  // todo
  // loading, error state handling
  if (!accountList) return <div>Loading...</div>;

  return (
    <Box sx={{ backgroundColor: blueGrey[200], padding: '15px' }}>
      <Card>
        <FormContainer>
          <FlexWrapper>
            <TextField
              sx={{ m: 1, width: '100ch' }}
              id="standard-basic"
              label="검색"
              variant="standard"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </FlexWrapper>
          <FlexWrapper>
            <Selector
              label="증권사"
              value={localBroker}
              setValue={e => setLocalBroker(e.target.value)}
              selectList={brokers}
            />
            <Selector
              label="활성화여부"
              value={localIsActive}
              setValue={e => setLocalIsActive(e.target.value)}
              selectList={isActiveAccount}
            />
            <Selector
              label="계좌 상태"
              value={localStatus}
              setValue={e => setLocalStatus(e.target.value)}
              selectList={accountsState}
            />
            <Button variant="text" onClick={onSearch}>
              검색
            </Button>
            <Button variant="text" onClick={resetForm}>
              검색초기화
            </Button>
          </FlexWrapper>
        </FormContainer>
      </Card>
      <AccountListTable accountList={accountList} customers={customers} />
      <Card>
        <PaginationContatiner>
          <Stack spacing={1}>
            <Pagination
              count={totalPages}
              onChange={onChangePage}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </PaginationContatiner>
      </Card>
    </Box>
  );
}

export default AccountList;

const Card = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PaginationContatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
