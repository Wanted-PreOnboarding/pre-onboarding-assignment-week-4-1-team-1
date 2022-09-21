import React, { useEffect, useState } from 'react';

const UserInfo = ({ user }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  const {
    id,
    uuid,
    photo,
    name,
    email,
    age,
    gender_origin,
    birth_date,
    phone_number,
    address,
    detail_address,
    last_login,
    created_at,
    updated_at,
  } = userInfo;

  const gender = gender_origin === 1 || gender_origin === 3 ? '남성' : '여성';

  return (
    <div>
      <div>아이디: {id}</div>
      <div>고유아이디: {uuid}</div>
      <div>
        <img src={photo} alt="프로필 사진" />
      </div>
      <div>이름: {name}</div>
      <div>이메일: {email}</div>
      <div>나이: {age}</div>
      <div>성별: {gender}</div>
      <div>생년월일: {birth_date}</div>
      <div>전화번호: {phone_number}</div>
      <div>주소: {address}</div>
      <div>상세주소: {detail_address}</div>
      <div>최근 로그인 시간: {last_login}</div>
      <div>생성 시간: {created_at}</div>
      <div>수정 시간: {updated_at}</div>
    </div>
  );
};

export default UserInfo;
