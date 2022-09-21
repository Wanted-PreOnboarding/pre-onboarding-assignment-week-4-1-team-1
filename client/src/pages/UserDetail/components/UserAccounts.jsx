import React, { useEffect, useState } from 'react';

const UserAccounts = ({ account }) => {
  const [accountInfo, setAccountInfo] = useState([]);

  useEffect(() => {
    if (account) setAccountInfo(account);
  }, [account]);

  return (
    <div>
      <ul>
        {accountInfo.map(account => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccounts;
