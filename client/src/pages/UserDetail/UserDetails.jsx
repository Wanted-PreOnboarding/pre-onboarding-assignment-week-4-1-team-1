import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserAccounts from './components/UserAccounts';
import { getACustomersById, getACustomerSetting } from '../../api/customers';
import { getAnAccountById } from '../../api/account';

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
    <>
      <UserInfo user={user} userSetting={userSetting} />
      <UserAccounts accounts={accounts} />
    </>
  );
};

export default UserDetails;
