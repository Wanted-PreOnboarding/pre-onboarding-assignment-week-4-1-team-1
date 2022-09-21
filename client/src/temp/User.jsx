import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ userInfo }) => {
  return (
    <div>
      <Link to={`users/details/${userInfo.id}`}>{userInfo.name}</Link>
    </div>
  );
};

export default User;
