import React from 'react';
import { useGetUsersByPageQuery } from '../services';

function Sample() {
  const { data: users } = useGetUsersByPageQuery(1);
  console.log(users);
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
            <sapn>phone number : {phone_number}</sapn>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sample;
