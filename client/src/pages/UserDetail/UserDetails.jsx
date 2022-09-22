import React, { useEffect, useState } from 'react';
import { getUser, getAccount } from '../../temp/api';
import { useParams } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserAccounts from './components/UserAccounts';

const UserDetails = () => {
  const params = useParams();
  const idx = params.id;
  const [user, setUser] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUser(idx);
        const accountsData = await getAccount(data.id);
        setUser(data);
        setAccounts(accountsData);
      } catch (e) {
        throw e;
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <UserInfo user={user} />
      <UserAccounts accounts={accounts} />
    </>
  );
};

export default UserDetails;
