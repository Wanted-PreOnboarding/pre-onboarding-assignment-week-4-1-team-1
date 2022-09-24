import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserAccounts from './components/UserAccounts';
import { getACustomersById, getACustomerSetting } from '../../api/customers';
import { getAnAccountById } from '../../api/account';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const UserDetails = () => {
  const params = useParams();
  const idx = params.id;
  const [user, setUser] = useState([]);
  const [userSetting, setUserSetting] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const [status, setStatus] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getACustomersById(idx);
        const [accountData, userSettingData] = await Promise.all([
          getAnAccountById(data.id),
          getACustomerSetting(data.uuid),
        ]);
        setUser(data);
        setAccounts(accountData.data);
        setUserSetting(userSettingData.data[0]);
      } catch (e) {
        throw e;
      }
    };
    getUserData();
  }, []);

  const handleStatus = e => {
    setStatus(e.target.value);
  };

  return (
    <UserDetailContainer>
      <Title>회원 정보</Title>
      <UserInfo user={user} userSetting={userSetting} />
      <SelectBox>
        <Title>회원 계좌 정보</Title>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">계좌상태</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="status"
              onChange={handleStatus}
            >
              <MenuItem value={''}>none</MenuItem>
              <MenuItem value={1}>입금대비</MenuItem>
              <MenuItem value={2}>운용중</MenuItem>
              <MenuItem value={3}>투자중지</MenuItem>
              <MenuItem value={4}>해지</MenuItem>
              <MenuItem value={9999}>관리자확인필요</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SelectBox>
      <UserAccounts accounts={accounts} status={status} />
    </UserDetailContainer>
  );
};

export default UserDetails;

const Title = styled.h2`
  margin-left: 20px;
`;

const UserDetailContainer = styled.section`
  margin: 10px;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
