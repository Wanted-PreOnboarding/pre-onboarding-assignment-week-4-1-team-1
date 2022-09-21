import React, { useEffect, useState } from 'react';
import { getUser, getAccount } from '../../temp/api';
import { useParams } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import UserAccounts from './components/UserAccounts';

const UserDetails = () => {
  const params = useParams();
  const idx = params.id;
  const [user, setUser] = useState([]);
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUser(idx);
        const accounts = await getAccount(data.id);
        setUser(data);
        setAccount(accounts);
      } catch (e) {
        throw e;
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <UserInfo user={user} />
      <UserAccounts account={account} />
    </>
  );
};

export default UserDetails;
