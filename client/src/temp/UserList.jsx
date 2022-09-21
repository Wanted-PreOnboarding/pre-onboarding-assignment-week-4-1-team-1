import React, { useState, useEffect } from 'react';
import { getUsers } from './api';
import User from './User';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const Users = async () => {
      try {
        const getUserListData = await getUsers();
        setUserList(getUserListData);
      } catch (e) {
        console.log('에러났쥬', e);
      }
    };
    Users();
  }, []);

  return (
    <>
      <h1>유저 리스트를 보여줍니다.</h1>
      {userList.map(user => (
        <User key={user.id} userInfo={user} />
      ))}
    </>
  );
};

export default UserList;
