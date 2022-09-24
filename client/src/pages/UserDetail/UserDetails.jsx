import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserAccounts from './components/UserAccounts';
import { getACustomersById, getACustomerSetting } from '../../api/customers';
import { getAnAccountById } from '../../api/account';
import styled from '@emotion/styled';

const UserDetails = () => {
  const params = useParams();
  const idx = params.id;
  const [user, setUser] = useState([]);
  const [userSetting, setUserSetting] = useState([]);
  const [accounts, setAccounts] = useState([]);

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

  return (
    <UserDetailContainer>
      <Title>회원 정보</Title>
      <UserInfo user={user} userSetting={userSetting} />
      <Title>회원 계좌 정보</Title>
      <UserAccounts accounts={accounts} />
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
