import React, { useState, useEffect } from 'react';
// import { getUsers } from './api';
import User from './User';
import api from '../api/customers';

//사용사 상세 페이지 구현을 위한 임시 리스트 아이템 컴포넌트입니다. 제출 전에 지우겠습니다.
const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const Users = async () => {
      try {
        // const getUserListData = await getUsers();
        const res = await api.getUsers();
        setUserList(res.data);
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
