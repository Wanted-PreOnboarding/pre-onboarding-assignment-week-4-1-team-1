import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Users from './pages/Users/Users';
import UsersFilter from './pages/Users/UsersFilter';
import Layout from './components/Layout';

import UserDetails from './pages/UserDetail/UserDetails';
import UserList from './temp/UserList';

import { getToken } from './utils/token';

function App() {
  const token = getToken();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={token ? <Layout /> : <Auth />}>
          <Route index element={<UserList />} />
          <Route path="/users/userSetting" element={<UsersFilter />} />
          <Route path="/users/customers" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/details/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
