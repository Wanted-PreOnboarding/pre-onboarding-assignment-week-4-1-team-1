import React from 'react';
import { Link } from 'react-router-dom';

//사용사 상세 페이지 구현을 위한 임시 사용자 리스트 컴포넌트입니다. 제출 전에 지우겠습니다.
const User = ({ userInfo }) => {
  return (
    <div>
      <Link to={`users/details/${userInfo.id}`}>{userInfo.name}</Link>
    </div>
  );
};

export default User;
