import React from 'react';
import { useGetUsersByPageQuery } from '../services/user';
import { useGetAccountsByPageQuery } from '../services/account';

function Sample() {
  const { data: usersData, isLoading } = useGetUsersByPageQuery(1);
  if (isLoading) return null;

  const { users, meta } = usersData;
  const { totalLength } = meta;
  console.log(totalLength);

  return (
    <div>
      <h1>Sample page</h1>
      <ul>
        {users.map(({ id, name, phone_number }) => (
          <li key={id}>
            <span>id : {id}</span>
            <br />
            <span>name : {name}</span>
            <br />
            <span>phone number : {phone_number}</span>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sample;
