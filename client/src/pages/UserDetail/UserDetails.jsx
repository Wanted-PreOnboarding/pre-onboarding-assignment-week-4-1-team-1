import React, { useEffect, useState } from 'react';
import { getUser, getAccount, getUserSetting } from '../../temp/api';
import { useParams } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserAccounts from './components/UserAccounts';

const UserDetails = () => {
  const params = useParams();
  const idx = params.id;
  const [user, setUser] = useState([]);
  const [userSetting, setUserSetting] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getUser(idx);
        const [accountData, userSettingData] = await Promise.all([
          getAccount(userData.id),
          getUserSetting(userData.uuid),
        ]);
        setUser(userData);
        setAccounts(accountData);
        setUserSetting(userSettingData[0]);
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
